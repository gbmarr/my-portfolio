import { Link } from "react-router-dom";

function NavBar({routes, styles}){
    return(
        <>
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {routes.map((route, index) => <li key={index} className={styles.item}><Link to={route.path}>{route.name}</Link></li>)}
            </ul>
        </nav>
        </>
    )
}

export default NavBar;