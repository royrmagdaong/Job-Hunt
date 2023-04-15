import React from 'react';
import WithData from './WithData';

const URL = '/json/job-posts.json';

const MyComponent = ({ data }) => {
    console.log(data)

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }
    
    return (
        <ul>
            {data.jobPosts.map(item => <li key={item.id}>{item['job-title']}</li>)}
        </ul>
    );

}

export default WithData(MyComponent, URL);
