import styles from './Input.module.css';

function Input({label, type}){
    return(
        <div className={styles.inputContainer}>
            <label className={styles.label} >{label}</label>
            <input className={styles.input} type={type} />
        </div>
    )
}

export default Input;