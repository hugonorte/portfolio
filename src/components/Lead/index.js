import {useTranslations} from 'next-intl';
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import LinkedInLogo from '../../../public/img/linkedin.svg'

function Lead() {
  const t = useTranslations('Index');

  return (
    <>
      <section id="linkedin">
        <p className={styles.linkedin}>
          <Image
            src={LinkedInLogo}
            width={500}
            height={500}
            alt="Picture of the author"
            className={styles.linkedin_logo}
            target="_blank"
          />
          <Link href="https://www.linkedin.com/in/hugonorte">@hugonorte</Link>
        </p>
      </section>

      <section id="lead">
        <p className={styles.lead}>{t("lead")}</p>
      </section>
    </>
  );
}

export default Lead