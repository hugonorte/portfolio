import styles from './styles.module.scss'
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Language } from '@/types/language';

async function ProfessionalSkills(props: Language) {
    const dict = await getDictionary(props.language);

    return (
        <section id='professional_skills'>
            <h2>{dict.index.professional_skills_title}</h2>
            <h3>{dict.index.programming_languages}</h3>
            <ul>
                <li>Javascript</li>
                <li>Python</li>
                <li className="list-style-none">
                    <ul>
                        <li>Django</li>
                        <li>Flask</li>
                    </ul>
                </li>
                <li>PHP</li>
                <li className="list-style-none">
                    <ul>
                        <li>Laravel</li>
                    </ul>
                </li>
                <li>GO</li>
                <li className="list-style-none">
                    <ul>
                        <li>Gin</li>
                    </ul>
                </li>
            </ul>

            <h3>{dict.index.databases}</h3>
            <ul>
                <li>MySQL</li>
                <li>PostGres</li>
            </ul>

            <h3>{dict.index.frontend}</h3>
            <ul>
                <li>NextJs</li>
                <li>React</li>
                <li>Angular</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>PostGres</li>
            </ul>

            <h3>API</h3>
            <ul>
                <li>REST API</li>
                <li>Postman</li>
            </ul>

            <h3>CLOUD</h3>
            <ul>
                <li>AWS - S3</li>
            </ul>

            <h3>{dict.index.idioms.title}</h3>
            <ul>
                <li>{dict.index.idioms.country.en} – {dict.index.idioms.proficiency.advanced}</li>
                <li>{dict.index.idioms.country.es} – {dict.index.idioms.proficiency.basic}</li>
                <li>{dict.index.idioms.country.ch} – {dict.index.idioms.proficiency.basic}</li>
                <li>{dict.index.idioms.country.pt} – {dict.index.idioms.proficiency.native}</li>
            </ul>
        </section>
    )
}

export default ProfessionalSkills