import React from 'react'
import Table from './Table'
import useFetch from './useFetch';


const Main = () => {
    const {data, error} = useFetch('/data.json')
    const getDate = () => {
        return new Date().toLocaleDateString();
    }
    const handleSubmit = () => {

    }

    return (
        <div>
            <h1>Your tasks for today</h1>
            <div className='box'>{getDate()}</div>
            {data && <Table  props={data}/>}
            {error && <div>{error}</div>}
            <button onClick={handleSubmit}>Submit</button>
            <button><a href="/">Calendar</a></button>
        </div>
    )
}

export default Main