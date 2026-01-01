import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "מערכת לניהול משימות",
  description: "נהל את המשימות שלך בקלות",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
