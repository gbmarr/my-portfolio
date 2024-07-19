import styles from './Card.module.css';
import Image from '../Image';
import Title from '../Title';
import Text from '../Text';
import Button from '../Button';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Card({formation}){

    const { title, description, date, institution, image, certification } = formation;
    const [modalOpen, setModalOpen] = useState(false);

    const handleDetail = () => setModalOpen(true);

    return(
        <div className={styles.card}>
            <Text content={date} styles={styles.date} />
            <Image image={image} alt={institution} styles={styles.image} />
            <div className={styles.header}>
                <Text content={institution} styles={styles.institution} />
                <Title type="h4" content={title} styles={styles.title} />
            </div>
            <div className={styles.body}>
                <Text content={description} styles={styles.description} />
            </div>
            <div className={styles.btncontainer}>
                <Button event={handleDetail} content="Detalle" type="button" styles={styles.button} />
                <Link to={certification} target="_blank" className={`${styles.button} ${styles.certification}`}>Certificación</Link>
            </div>
            {modalOpen && <Modal formation={formation} onClose={()=> setModalOpen(false)} />}
        </div>
    )
}

// id
// image
// name
// description
// graduation
// technologies
// demo
// certification

export default Card;