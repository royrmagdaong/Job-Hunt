import styles from '@/styles/NavBar.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const [userData, setUserData] = useState({
        role: ''
    })

    const { push } = useRouter();

    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(user){
            setUserData(JSON.parse(user))
        }
        console.log(JSON.parse(user))
    }, [])

    const logout = () => {
        localStorage.removeItem('user')
        console.log('LOGOUT')
        push('/login')
    }

    // const checkIfLoggedIn = () => {

    //     if(!userData){
    //         return 
    //     }else{
    //         if(userData.role === 'applicant'){
    //             return <Link href="/" className={styles["search-jobs"]}>Search Jobs</Link>
    //         }else if(userData.role === 'recruiter'){
    //             return <Link href="/" className={styles["search-jobs"]}>post Job</Link>
    //         }
    //     }
        
    // }

    return (
        <div className={styles['nav-container']}>
            <nav className={styles.navbar}>
                <h1 className={styles.title}>Job Hunt</h1>
                <ul className={styles["nav-ul"]}>
                    <li>
                        {
                            !userData['role']?<Link href="/" className={styles["search-jobs"]}>Search Jobs</Link>:''
                        }
                        {
                            userData['role']==='applicant'?<Link href="/" className={styles["search-jobs"]}>Search Jobs</Link>:''
                        }
                        {
                            userData['role']==='recruiter'?<Link href="/post-job" className={styles["search-jobs"]}>Post Job</Link>:''
                        }
                        {
                            userData['role']==='admin'?<Link href="/users" className={styles["search-jobs"]}>Users</Link>:''
                        }
                    </li>
                    <li>
                        <Link href="/about" className={styles["about"]}>About</Link>
                    </li>
                    <li>
                        {
                            userData.role?<span onClick={logout} className={styles["login"]}>Logout</span> : <Link href="/login" className={styles["login"]}>Login</Link> 
                        }
                        
                    </li>
                    {/* <li>
                        <Link href="/test" className={styles["login"]}>test</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;