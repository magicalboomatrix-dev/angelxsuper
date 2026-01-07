'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Footer from '../components/footer';

export default function StatementsPage() {
  const router = useRouter();
  const [statements, setStatements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchStatements = async () => {
      try {
        const res = await fetch("/api/statements", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setStatements(data.statements || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatements();
  }, [router]);

  return (
    <div>
      <main>
        <div className="page-wrappers empty-page full-height">
          <div className="page-wrapperss page-wrapper-ex page-wrapper-login page-wrapper-loginacc form-wrapper">
            <div className="brdc">
              <div className="back-btn">
                <Link href="/home">
                  <img src="images/back-btn.png" alt="Back" />
                </Link>
              </div>
              <h3>Statements</h3>
            </div>
            <section className="section-1">
              {loading ? (
                <p style={{ textAlign: "center", padding: "20px" }}>Loading...</p>
              ) : statements.length === 0 ? (
                <div className="image">
                  <img src="images/empty.jpg" alt="Empty" />
                  <p style={{ textAlign: "center", color: "#666" }}>No statements found</p>
                </div>
              ) : (
                <div className="history-list" style={{ padding: "0 16px" }}>
                  {statements.map((stmt) => (
                    <div key={stmt.id} className="history-card" style={{
                      background: "#fff",
                      borderRadius: "12px",
                      padding: "16px",
                      marginBottom: "12px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ fontWeight: "600", color: "#333" }}>{stmt.type}</span>
                        <span style={{ 
                          fontWeight: "600", 
                          color: stmt.type === 'DEPOSIT' || stmt.type === 'ADMIN_CREDIT' ? '#10b981' : '#ef4444' 
                        }}>
                          {stmt.type === 'DEPOSIT' || stmt.type === 'ADMIN_CREDIT' ? '+' : '-'}${stmt.amount}
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#666" }}>
                        <span>{new Date(stmt.createdAt).toLocaleDateString()}</span>
                        <span style={{ 
                          padding: "2px 8px", 
                          borderRadius: "4px", 
                          background: stmt.status === 'COMPLETED' ? '#ecfdf5' : '#fffbeb',
                          color: stmt.status === 'COMPLETED' ? '#047857' : '#b45309',
                          fontSize: "11px"
                        }}>
                          {stmt.status}
                        </span>
                      </div>
                      {stmt.description && (
                        <div style={{ marginTop: "8px", fontSize: "12px", color: "#999", borderTop: "1px solid #eee", paddingTop: "8px" }}>
                          {stmt.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
