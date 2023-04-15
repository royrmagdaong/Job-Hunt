import styles from '@/styles/ListJobs.module.css'
import Job from "@/components/Job";


const ListJobs = (props) => {
    const viewJob = (job) => {
        props.viewJob(job);
    }
    
    return (
        <div className={styles['container']}>
            {
               props.jobs.jobPosts.map(item=>(
                <Job job={item} key={item.id} viewJob={viewJob}></Job>
               ))
            }
        </div>
    );
}
 
export default ListJobs;