import {redirect} from 'next/navigation';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    professional_title: t('professional_title')
  };
}

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/en');
}