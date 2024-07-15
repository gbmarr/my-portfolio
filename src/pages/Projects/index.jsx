import styles from './Projects.module.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Project from '../../components/Project';
import Footer from '../../components/Footer';
import bgBanner from '../../assets/img/bg-portfolio-2.webp';
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
        <Header />
        <Banner img={bgBanner} content="Proyectos / Prácticas" />
        <Container section={styles.projects}
        content={
            <>
            {projects.map((project) => <Project project={project} /> )}
            </>
        }
        />
        <Footer />
        </>
    )
}

export default Projects;