import React from 'react'
import Table from './Table'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';


const Main = () => {
    const {data, error} = useFetch('/data.json')
    const getDate = () => {
        return new Date().toLocaleDateString();
    }
    const handleSubmit = () => {

    }

    return (
        <div>
            <form onSubmit=''>
                <h1>The tasks of today</h1>
                <div className='box'>{getDate()}</div>

                <table>
                    <tbody>
                        <tr>
                            <th>Home Work</th>
                            <th>Time</th>
                            <th>Done</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <label htmlFor="checkbox1"></label>
                                <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {error && <div>{error}</div>}
                <button onClick=''>Submit</button>
                <button><a href="/calendar">Calendar</a></button>
            </form>


            <div>
                {data.length > 0 ? (
                    data.map((duties) => (
                        <p key={duties.id}>
                            {duties.homework} - {duties.time} - {duties.done}
                        </p>
                    ))
                ) : (
                    <p>No tasks available.</p>
                )}
            </div>

        </div>
    )
}


export default Main