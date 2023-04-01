import styles from '@/styles/ViewJob.module.css'
import Image from 'next/image'

const ViewJob = ({job}) => {
    return (
        <div className={styles['container']}>
            <div className={styles['logo']}>
                <Image
                    src={`/${job['logo']}`}
                    alt="Company Logo"
                    width={160}
                    height={120}
                />
            </div>
            <div className={styles['job-title']}>{job['job-title']}</div>
            <div className={styles['company-name']}>{job['company-name']}</div>
            <div className={styles['location']}>{job['location']}</div>
            <div className={styles['salary']}>{job['salary']}</div>
            <ul>
                {
                    job['job-highlights'].map(highlight=>(
                        <li className={styles['job-highlights']} key={highlight}>{highlight}</li>
                    ))
                }
            </ul>
            <div className={styles['job-description']}>
                <h4>Job Description</h4>
                <p>{job['job-description']}</p>
            </div>
            <div className={styles['company-info']}>
                <h4>Company Info</h4>
                <p>{job['company-info']}</p>
            </div>
        </div>
    );
}
 
export default ViewJob;