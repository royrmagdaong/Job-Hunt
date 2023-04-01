import styles from '@/styles/ListJobs.module.css'
import Job from "@/components/Job";

function ListJobs(props){

    const viewJob = (job) => {
        props.viewJob(job);
    }

    return (
        <div className={styles['container']}>
            {
                props.jobs.map(job=>(
                    <Job key={job.id} job={job} activeCard={props.activeCard} viewJob={viewJob}></Job>
                ))
            }
        </div>
    );
}

 
export default ListJobs;