import styles from './Header.module.css';
import Title from '../Title';
import NavBar from '../NavBar';

function Header(){

    const routes = [
        { path: '/', name: 'Home' },
        { path: '/academic', name: 'Formación'},
        { path: '/skills', name: 'Skills'},
        { path: '/projects', name: 'Proyectos'},
        { path: '/aboutme', name: 'About' },
        { path: '/contact', name: 'Contact' },
    ]

    return(
        <>
        <header className={styles.header}>
            <Title type="h1" content="Gabriel Marrero - Portfolio" styles={styles.headerTitle} />
            <NavBar routes={routes} styles={styles} />
        </header>
        </>
    )
}

export default Header;