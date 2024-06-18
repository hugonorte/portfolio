import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Varta } from 'next/font/google';
import {unstable_setRequestLocale} from 'next-intl/server';

const varta = Varta({
  subsets: ['latin'],
  display: 'swap',
});

const locales = ['en', 'de', 'pt-br', 'es'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
 
export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={varta.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}