import styles from '@/styles/ListJobs.module.css'
import Job from "@/components/Job";
import JobContext from '@/components/use-context/JobContext'
import { useContext } from 'react';

function ListJobs(props){

    const jobs = useContext(JobContext);

    const viewJob = (job) => {
        props.viewJob(job);
    }

    return (
        <div className={styles['container']}>
            {
                jobs.map(job=>(
                    <Job key={job.id} job={job} activeCard={props.activeCard} viewJob={viewJob}></Job>
                ))
            }
        </div>
    );
}

 
export default ListJobs;