import styles from './Academic.module.css';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import bgBanner from '../../assets/img/bg-portfolio-academic.webp';
import { useEffect, useState } from 'react';

function Academic(){

    const [formations, setFormations] = useState([]);

    useEffect(
        () => {
            fetch('http://localhost:3000/formations')
            .then((response) => response.json())
            .then((data) => setFormations(data))
            }, []
    )

    return(
        <>
        <Banner img={bgBanner} content="Formación Académica" />
        <Container section={styles.academic}
        content={
            <>
            {formations.map((formation) => <Card formation={formation} key={formation.id} /> ) }
            </>
        }
        />
        <Footer />
        </>
    )
}

export default Academic;