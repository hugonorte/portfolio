import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Varta } from 'next/font/google';

const varta = Varta({
  subsets: ['latin'],
  display: 'swap',
})
 
export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  console.log('bla')
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