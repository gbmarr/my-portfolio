import styles from './Skills.module.css';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import bgBanner from '../../assets/img/bg-portfolio-skills.webp';
import { useEffect, useState } from 'react';
import Image from '../../components/Image';

function Skills(){

    const [skills, setSkills] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:3000/skills")
            .then((response) => response.json())
            .then((data) => setSkills(data));
            }, []
    );

    return(
        <>
        <Banner content="Skills" img={bgBanner} />
        <Container section={styles.skills}
        content={
            <>
            <div className={styles.skillContainer}>
                {skills.map((skill) => <Image image={skill.techimg} styles={styles.skillImg} key={skill.id} alt={skill.name} />)}
            </div>
            </>
        } />
        <Footer />
        </>
    )
}

export default Skills;