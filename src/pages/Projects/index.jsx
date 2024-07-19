import styles from './Projects.module.css';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Project from '../../components/Project';
import Footer from '../../components/Footer';
import bgBanner from '../../assets/img/bg-portfolio-projects.webp';
import { useEffect, useState } from 'react';

function Projects(){

    const [projects, setProjects] = useState([]);

    useEffect(
        () => {
            fetch('http://localhost:3000/projects')
            .then((response) => response.json())
            .then((data) => setProjects(data));
            }, []
    )

    return(
        <>
        <Banner img={bgBanner} content="Proyectos / Prácticas" />
        <Container section={styles.projects}
        content={
            <>
            {projects.map((project) => <Project project={project} key={project.id} /> )}
            </>
        }
        />
        <Footer />
        </>
    )
}

export default Projects;