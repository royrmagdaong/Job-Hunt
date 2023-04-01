import styles from '@/styles/NavBar.module.css'
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className={styles['nav-container']}>
            <nav className={styles.navbar}>
                <h1 className={styles.title}>Job Hunt</h1>
                <ul className={styles["nav-ul"]}>
                    <li>
                        <Link href="/" className={styles["search-jobs"]}>Search Jobs</Link>
                    </li>
                    <li>
                        <Link href="/about" className={styles["about"]}>About</Link>
                    </li>
                    <li>
                        <Link href="/login" className={styles["login"]}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;