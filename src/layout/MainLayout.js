import NavBar from "@/components/NavBar";
import Filter from "@/components/Filter";
import ListJobs from "@/components/ListJobs";
import ViewJob from "@/components/ViewJob";
import styles from '@/styles/MainLayout.module.css'
import { useState, useEffect } from 'react';
import JobContext from '@/components/use-context/JobContext'

const MainLayout = () => {

    const [jobs, setJobs] = useState([]);
    const [job, setJob] = useState([]);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(()=>{
        const fetchJobs = async () => {
            const res = await fetch('/json/job-posts.json')
            const jsonData = await res.json();
            setJobs(jsonData.jobPosts);
            setJob(jsonData.jobPosts[0]);
            setActiveCard(jsonData.jobPosts[0].id)
            // console.log(jobs)
        }
        fetchJobs();
    }, []);

    if (!jobs || jobs.length === 0) {
        return <div>Loading...</div>;
    }

    const viewJob = (data) => {
        setJob(data);
        setActiveCard(data.id)
        // console.log('view job', data)
    }

    return ( 
        <div>
            <NavBar></NavBar>
            <Filter></Filter>
            <div className={styles['main-content']}>
                <JobContext.Provider value={jobs}>
                    <ListJobs activeCard={activeCard} viewJob={viewJob}></ListJobs>
                    <ViewJob job={job}></ViewJob>
                </JobContext.Provider>
            </div>
        </div>
     );
}

export default MainLayout;