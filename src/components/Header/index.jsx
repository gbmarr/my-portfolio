import styles from './Header.module.css';
import Title from '../Title';
import Network from '../Network';

function Header(){
    return(
        <>
        <header className={styles.header}>
            <Title type="h1" content="Gabriel Marrero - Portfolio" styles={styles.headerTitle} />
            <div>
                <Network url="mailto:gab.bmar.05@gmail.com" name="gab.bmar.05@gmail.com" icon="bx bxl-gmail" />
                <Network url="https://www.linkedin.com/in/gabrielmarrerok" name="linkedin.com/in/gabrielmarrerok" icon="bx bxl-linkedin" />
            </div>
        </header>
        </>
    )
}

export default Header;