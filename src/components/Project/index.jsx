import Title from '../Title';
import Text from '../Text';
import Image from '../Image';
import styles from './Project.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Project({project}){

    const [skills, setSkills] = useState([]);

    useEffect(
        () => {
            fetch('http://localhost:3000/skills')
            .then(response => response.json())
            .then(data => setSkills(data));
            }, []
    )

    const skillsFilter = skills.filter(skill => project.technologies.includes(skill.name));

    return(
        <div className={styles.project}>
                <Title type="h4" content={project.title} styles={styles.title} />
            <div className={styles.projectDataContainer}>
                <Text content={project.description} styles={styles.description} />
                <div className={styles.techContainer}>
                    { skillsFilter.map(skill => <Image image={skill.techimg} styles={styles.tech} key={skill.id} />) }
                </div>
            </div>
            <div className={styles.btnContainer}>
                <Link to={project.demo} className={styles.btn} target='_blank' >Demo</Link>
                <Link to={project.repository} className={`${styles.btn} ${styles.repo}`} target='_blank' >Repositorio</Link>
            </div>
        </div>
    )
}

export default Project;

// id
// title
// description
// repository
// demo
// technologies