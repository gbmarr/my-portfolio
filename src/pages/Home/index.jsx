import styles from './Home.module.css';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Text from '../../components/Text';
import bgBanner from '../../assets/img/bg-portfolio-home.webp';

function Home(){
    return(
        <>
            <Banner img={bgBanner} content="Desarrollador Frontend - React" />
            <Container section={styles.presentation} 
            content={<>
                <Title type="h3" content="Presentación" styles={styles.containerTitle} />
                <Text content="¡Hola! Soy Gabriel Marrero, estudiante de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas en la Universidad Nacional del Centro de la Provincia de Buenos Aires, con vistas a graduarme en 2026. Recientemente, me gradué de la formación 'Oracle Next Education F2 T6 Front-end' de Alura Latam. Además, he realizado una serie de cursos de C# en .NET Framework. Me apasiona el desarrollo de aplicaciones y siempre estoy en busca de aprender y mejorar mis habilidades." styles={styles.presentationText} />
                </>}
            />
            <Footer />
        </>
    )
}

export default Home;