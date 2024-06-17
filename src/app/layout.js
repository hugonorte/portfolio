import "./globals.css";

export default function RootLayout({ children, params: {locale} }) {
  return (
    //suppressHydrationWarning
    <html suppressHydrationWarning lang={locale} >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
