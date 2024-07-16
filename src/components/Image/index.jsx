function Image({image, alt, styles}){
    return(
        <img src={image} alt={alt} className={styles} />
    )
}

export default Image;