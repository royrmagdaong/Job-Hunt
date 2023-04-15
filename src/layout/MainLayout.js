import NavBar from "@/components/NavBar";
import Filter from "@/components/Filter";
import ListJobs from "@/components/ListJobs";
import ViewJob from "@/components/ViewJob";
import styles from '@/styles/MainLayout.module.css'
import { useState, useEffect } from 'react'

const MainLayout = () => {
    const [jobs, setJobs] = useState(null);
    const [job, setJob] = useState(null);

    useEffect(()=>{
        const fetchJobs = async () => {
            const res = await fetch('/json/job-posts.json');
            const jsonData = await res.json();
            console.log(jsonData);
            setJob(jsonData.jobPosts[0]);
            setJobs(jsonData);
        }
        fetchJobs();
    },[])

    if (!jobs || jobs.length === 0) {
        return <div>Loading...</div>;
    }

    function viewJob(job){
        console.log(job)
        setJob(job)
    }

    return ( 
        <div>
            <NavBar></NavBar>
            <Filter></Filter>
                
            <div className={styles['main-content']}>
                
                <ListJobs jobs={jobs} viewJob={viewJob}></ListJobs>
                <ViewJob job={job}></ViewJob>
            </div>
        </div>
     );
}
 
export default MainLayout;