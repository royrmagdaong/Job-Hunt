import React from 'react';
import WithData from './WithData';

const URL = '/json/users.json';

const Users = ({ data, handleClick }) => {
    console.log(data)

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }
    
    return (
        <ul>
            {data.users.map(item => <li key={item.id}>{item['name']}</li>)}
            <button onClick={handleClick}>Click me</button>
        </ul>
    );
}

export default WithData(Users, URL);
