import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'de', 'pt-br', 'es'];

export async function generateStaticParams() {
  // Retorna uma lista de objetos contendo os parâmetros de rota possíveis
  return locales.map(locale => ({ locale }));
}

export async function getStaticProps({ params }) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    return {
      notFound: true,
    };
  }

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    props: {
      locale,
      messages,
    },
  };
}
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});