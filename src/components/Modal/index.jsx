import styles from './Modal.module.css';
import Button from '../Button';
import Text from '../Text';
import Image from '../Image';
import Title from '../Title';

function Modal({formation, onClose}){

    const { title, description, date, institution, image } = formation;

    return(
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <Text content={date} styles={styles.date} />
                <Image image={image} alt={institution} styles={styles.image} />
                <div className={styles.header}>
                    <Text content={institution} styles={styles.institution} />
                    <Title type="h4" content={title} styles={styles.title} />
                </div>
                <div className={styles.body}>
                    <Text content={description} styles={styles.description} />
                </div>
                <Button event={onClose} styles={styles.button}
                content="Cerrar" type="button" />
            </div>
        </div>
    )
}

export default Modal;