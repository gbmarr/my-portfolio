import styles from './Contact.module.css';
import Banner from '../../components/Banner';
import bgBanner from '../../assets/img/bg-portfolio-contact.webp';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Network from '../../components/Network';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Contact(){

    const handleSend = (e) => {
        e.preventDefault();
        console.log("Email enviado");
    };

    return(
        <>
        <Banner img={bgBanner} content="Contacto" />
        <Container section ={styles.contact}
        content={
            <>
            <form onSubmit={handleSend} className={styles.formContainer}>
                <Title type="h4" content="Enviar mail" styles={styles.formTitle} />
                <Input label="Nombre y apellido:" type="text" />
                <Input label="Email:" type="text" />
                <Input label="Consulta:" type="text" />
                <Button content="Enviar" styles={styles.button} type="submit" />
            </form>
            <div className={styles.networkContainer}>
                <Network url="mailto:gab.bmar.05@gmail.com" name="gab.bmar.05@gmail.com" icon="bx bxl-gmail" />
                <Network url="https://www.linkedin.com/in/gabrielmarrerok" name="linkedin.com/in/gabrielmarrerok" icon="bx bxl-linkedin" />
                <Network url="https://www.instagram.com/direct/t/115793749814157/" name="@gabmarre" icon="bx bxl-instagram" />
                <Network url="https://wa.me/+5492262339680" name="Gabriel Marrero" icon="bx bxl-whatsapp" />
            </div>
            </>
        } />
        <Footer />
        </>
    )
}

export default Contact;