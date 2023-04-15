import styles from '@/styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles['nav-container']}>
            <nav className={styles.navbar}>
                <h1 className={styles.title}>Job Hunt</h1>
                <ul className={styles["nav-ul"]}>
                    <li className={styles["search-jobs"]}>Search Job</li>
                    <li className={styles["about"]}>About</li>
                    <li className={styles["login"]}>Login</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;