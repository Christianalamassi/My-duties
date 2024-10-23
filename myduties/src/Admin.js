import React from 'react';
import useFetch from './useFetch';
import Table from './Table';
import { Link } from 'react-router-dom';


const Admin = () => {
    const { data, error } = useFetch('/data.json')
    const getDate = () => {
        return new Date().toLocaleDateString();
    };

    return (
        <div>
            <form onSubmit=''>
                <h1>The tasks of today</h1>
                <div className='box'>{getDate()}</div>
                {data && <Table props={data} />}
                {error && <div>{error}</div>}
                <button onClick=''>Submit</button>
                <button><a href="/calendar">Calendar</a></button>
                <button><Link to="/">Home</Link></button>
            </form>
        </div>
    )
}


export default Admin