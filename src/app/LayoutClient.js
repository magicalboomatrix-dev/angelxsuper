"use client";
import { usePathname } from "next/navigation";
import Footer from "./components/footer";
import ToastProvider from "./components/ToastProvider";
import ConfirmProvider from "./components/ConfirmProvider";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const hideFooter = pathname?.startsWith("/admin");

  return (
    <ToastProvider>
      <ConfirmProvider>
        {children}
        {!hideFooter && <Footer />}
      </ConfirmProvider>
    </ToastProvider>
  );
}
