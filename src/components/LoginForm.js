import styles from '@/styles/LoginForm.module.css'

const NavBar = () => {
    return (
        <div className={styles['login-card']}>
            <h2 style={{textAlign: 'center', fontSize: '32px'}}>Login</h2>
            <div className={styles['login-fields']}>
                <input className={styles['login-email']} type='email' name='email' placeholder='Email' />
                <input className={styles['login-password']} type='password' name='password' placeholder='' />
                <button className={styles['login-btn']}>Login</button>
            </div>
        </div>
    );
}
 
export default NavBar;