import { getCurrentUser } from '@/lib/auth';
import prisma  from '@/lib/prisma';

export async function GET(req) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401 }
      );
    }

    // If wallet missing, fallback to zeros
    const wallet = user.wallet || {
      usdtAvailable: 0,
      usdtDeposited: 0,
      usdtWithdrawn: 0,
    };

    // Calculate progressing balance
    const progressing = wallet.usdtDeposited - wallet.usdtAvailable - wallet.usdtWithdrawn;

    return new Response(
      JSON.stringify({
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          mobile: user.mobile,
          wallet: {
            total: wallet.usdtDeposited,
            available: wallet.usdtAvailable,
            withdrawn: wallet.usdtWithdrawn,
            progressing: progressing < 0 ? 0 : progressing,
          },
        },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Error fetching user:', err);
    return new Response(
      JSON.stringify({ error: 'Server error' }),
      { status: 500 }
    );
  }
}
