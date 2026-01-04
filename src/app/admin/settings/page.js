"use client";
import { useEffect, useState } from 'react';
import styles from '../admin.module.css';
import { useRouter } from 'next/navigation';
import { useToast } from '@/app/components/ToastProvider';

export default function AdminSettingsPage() {
  const [rate, setRate] = useState(102);
  const [depositMin, setDepositMin] = useState(100);
  const [withdrawMin, setWithdrawMin] = useState(50);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const router = useRouter();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/settings');
      if (res.status === 401) return router.replace('/admin/login');
      const data = await res.json();
      if (data.settings) {
        setRate(data.settings.rate);
        setDepositMin(data.settings.depositMin);
        setWithdrawMin(data.settings.withdrawMin);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const { showToast } = useToast();

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rate, depositMin, withdrawMin }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Settings updated successfully ✅', 'success');
      } else {
        showToast(data.error || 'Failed to update settings', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Failed to update settings', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "4px", color: "#111827" }}>Settings</h2>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>Configure platform settings and preferences</p>
      </div>

      <div className={styles.sectionCard} style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", overflowX: "auto" }}>
            <button 
              onClick={() => setActiveTab('general')}
              style={{ 
                padding: "16px 24px", 
                fontWeight: 500, 
                color: activeTab === 'general' ? "#2563eb" : "#4b5563", 
                borderBottom: activeTab === 'general' ? "2px solid #2563eb" : "none",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              General
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              style={{ 
                padding: "16px 24px", 
                fontWeight: 500, 
                color: activeTab === 'security' ? "#2563eb" : "#4b5563", 
                borderBottom: activeTab === 'security' ? "2px solid #2563eb" : "none",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              Security
            </button>
          </div>
        </div>

        <div style={{ padding: "24px" }}>
          {activeTab === 'general' && (
            <div style={{ maxWidth: "600px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px", color: "#111827" }}>Transaction Settings</h3>
              
              <div className={styles.formGroup}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label className={styles.formLabel} style={{ marginBottom: 0 }}>📊 Rate (per USDT in ₹)</label>
                </div>
                <input 
                  type="number" 
                  value={rate} 
                  onChange={(e) => setRate(parseFloat(e.target.value) || 0)} 
                  className={styles.formInput}
                  step="0.01"
                />
                <p style={{ fontSize: '12px', color: '#6b7280', marginTop: 4 }}>Exchange rate for USDT to INR conversion</p>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>� Minimum Deposit Amount (USDT)</label>
                <input 
                  type="number" 
                  value={depositMin} 
                  onChange={(e) => setDepositMin(parseFloat(e.target.value) || 0)} 
                  className={styles.formInput}
                  step="1"
                />
                <p style={{ fontSize: '12px', color: '#6b7280', marginTop: 4 }}>Minimum USDT amount users can deposit in one transaction</p>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>💳 Minimum Withdrawal Amount (USDT)</label>
                <input 
                  type="number" 
                  value={withdrawMin} 
                  onChange={(e) => setWithdrawMin(parseFloat(e.target.value) || 0)} 
                  className={styles.formInput}
                  step="1"
                />
                <p style={{ fontSize: '12px', color: '#6b7280', marginTop: 4 }}>Minimum USDT amount users can withdraw to their bank account</p>
              </div>

              <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid #e5e7eb" }}>
                <button 
                  onClick={handleSave} 
                  disabled={saving}
                  className={styles.viewAllBtn}
                  style={{ padding: "10px 20px", fontSize: "14px" }}
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div style={{ padding: "20px", textAlign: "center", color: "#6b7280" }}>
              <i className="fas fa-lock" style={{ fontSize: "48px", marginBottom: "16px", color: "#d1d5db" }}></i>
              <p>Security settings are coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
