function Title({type, content, styles}){
    switch (type) {
        case 'h1':
            return <h1 className={styles}>{content}</h1>
        case 'h2':
            return <h2 className={styles}>{content}</h2>
        case 'h3':
            return <h3 className={styles}>{content}</h3>
        case 'h4':
            return <h4 className={styles}>{content}</h4>
        default:
            return <h5 className={styles}>{content}</h5>
    }
}

export default Title;