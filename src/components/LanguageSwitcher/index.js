import Link from 'next/link'
import styles from './styles.module.scss'

const redirect = (locale) => {
  window.location.href = `/${locale}`
}

function LanguageSwitcher() {
  return (
    <div className='fontc'>
      <select id="languageSelector">
        <option value="en">English</option>
        <option value="pt-br">Portuguese</option>
        <option value="de">German</option>
        <option value="es">German</option>
      </select>
        {/* <Link href="/en" className={styles.fontc}>Inglês</Link>    
        <Link href="/pt-br">Brasileiro</Link>    
        <Link href="/de">Alemão</Link> */}    
    </div>
  )
}

export default LanguageSwitcher