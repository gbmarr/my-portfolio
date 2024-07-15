import styles from './Banner.module.css';
import Title from '../Title';
import Image from '../Image';

function Banner({img, content}){
    return(
        <div className={styles.banner}>
            <Title type="h2" content={content} styles={styles.bannerTitle} />
            <Image image={img} alt="Imagen de fondo que muestra código." styles={styles.bannerImg} />
        </div>
    )
}

export default Banner;