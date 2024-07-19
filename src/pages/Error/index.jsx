import styles from './Error.module.css';
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import bgBanner from '../../assets/img/bg-portfolio-home.webp';
import Text from "../../components/Text";

function Error(){
    return(
        <>
        <Banner img={bgBanner} content="Error" />
        <Container section="error"
        content={ <Text styles={styles.errorText}
        content="Recurso no encontrado, contacte a su desarrollador amigo."
        /> }
        />
        <Footer />
        </>
    )
}

export default Error;