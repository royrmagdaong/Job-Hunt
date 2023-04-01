import styles from '@/styles/Job.module.css'
import Image from 'next/image'

const Job = (props) => {
    const highlights = [];

    for(let i = 0; i<props.job['job-highlights'].length;i++){
        if(i<=2){
            highlights.push(
                <li key={i}>{props.job['job-highlights'][i]}</li>
            )
        }else{
            break;
        }
    }

    const viewJob = () => {
        props.viewJob(props.job);
    }

    return (
        <div className={`${styles['card']} ${props.activeCard===props.job.id?styles['selected-card']:''}`} onClick={viewJob}>
            <div className={styles['logo']}>
                <Image
                    src={`/${props.job.logo}`}
                    alt="Company Logo"
                    width={80}
                    height={50}
                />
            </div>
            <div className={styles['job-title']}>{props.job['job-title']}</div>
            <div className={styles['company-name']}>{props.job['company-name']}</div>
            <div className={styles['location']}>{props.job['location']}</div>
            <div className={styles['salary']}>{props.job['salary']}</div>
            <ul>{highlights}</ul>
        </div>
    );
}
 
export default Job;