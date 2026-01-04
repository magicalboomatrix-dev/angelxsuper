import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

function getAdminFromCookie(req) {
  try {
    const token = req.cookies.get('adminToken')?.value;
    if (!token) return null;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch {
    return null;
  }
}

export async function GET(req) {
  try {
    const admin = getAdminFromCookie(req);
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    let settings = await prisma.settings.findFirst();
    if (!settings) {
      settings = await prisma.settings.create({
        data: { rate: 102, withdrawMin: 50, depositMin: 100 },
      });
    }

    return NextResponse.json({ settings });
  } catch (err) {
    console.error('Admin get settings error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const admin = getAdminFromCookie(req);
    if (!admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const { rate, depositMin, withdrawMin } = body;

    // basic validation
    const r = parseFloat(rate);
    const d = parseFloat(depositMin);
    const w = parseFloat(withdrawMin);

    if (Number.isNaN(r) || Number.isNaN(d) || Number.isNaN(w)) {
      return NextResponse.json({ error: 'Invalid values' }, { status: 400 });
    }

    const current = await prisma.settings.findFirst();
    if (current) {
      const updated = await prisma.settings.update({
        where: { id: current.id },
        data: { rate: r, depositMin: d, withdrawMin: w },
      });
      return NextResponse.json({ settings: updated });
    } else {
      const created = await prisma.settings.create({
        data: { rate: r, depositMin: d, withdrawMin: w },
      });
      return NextResponse.json({ settings: created });
    }
  } catch (err) {
    console.error('Admin set settings error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
