function Button({styles, content, type, event}){
    return <button onClick={event} className={styles} type={type}>{content}</button>
}

export default Button;