import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "نگارخانه آفتاب | گالری عکس آنلاین",
  description:
    "گالری آنلاین نگارخانه آفتاب مجموعه‌ای برگزیده از تصاویر هنری طبیعت، معماری و زندگی شهری را با قاب‌های الهام‌بخش برای تجربه‌ای متفاوت از تماشا ارائه می‌کند.",
  openGraph: {
    title: "نگارخانه آفتاب",
    description:
      "جستجو، فیلتر و مشاهده تصاویر الهام‌بخش طبیعت، معماری و زندگی شهری در یک گالری آنلاین مدرن.",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.variable}>
        {children}
      </body>
    </html>
  );
}
