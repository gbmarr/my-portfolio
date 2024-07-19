import styles from './Container.module.css';

function Container({content, section}){

    const visuals = `${styles.container} ${section}`;

    return(
        <div className={visuals}>
            {content}
        </div>
    )
}

export default Container;