import styles from './Network.module.css';

function Networks({url, name, icon}){

    return(
        <a href={url} target='_blank' rel='noreferrer' className={styles.network}>
            <i className={icon}></i>
            <p>{name}</p>
        </a>
    )
}

export default Networks;