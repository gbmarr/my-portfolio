import styles from './AboutMe.module.css';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import bgBanner from '../../assets/img/bg-portfolio-aboutme.webp';
import Text from '../../components/Text';

function AboutMe(){
    return(
        <>
        <Header />
        <Banner img={bgBanner} content="Sobre Mí" />
        <Container section={styles.aboutme}
        content={
            <>
            <Text styles={styles.aboutText}
            content="Soy un desarrollador cuya travesía en este mundo de la tecnología comenzó con la convicción de que la capacidad de aprender y crecer está al alcance de todos. Me atrae la posibilidad de conectar con personas de otras culturas y conocer nuevos idiomas, lo que me llevó a meterme de lleno en este rubro. Fuera de lo relacionado al desarrollo, me encanta el entrenamiento de fuerza, el ciclismo y el rock.
            Particularmente, me considero alguien reservado y tranquilo. Como profesional me destaco por mi tenacidad, mi enfoque, mi simplicidad y concisión."
            />
            <Text styles={styles.aboutText}
            content="Además, busco convertirme en un referente, no solo por mis habilidades técnicas, sino también por mi capacidad para guiar y motivar a otros pares. Mi visión incluye desplegar proyectos que no solo brinden satisfacción en lo laboral, sino también un importante crecimiento y aprendizaje a través del trabajo en equipo." />
            </>
        }
        />
        <Footer />
        </>
    )
}

export default AboutMe;