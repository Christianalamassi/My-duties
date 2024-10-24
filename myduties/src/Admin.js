import React, { useState } from 'react';
import useFetch from './useFetch';
// import Table from './Table';
import { Link } from 'react-router-dom';


const Admin = () => {
    const { data, error } = useFetch('/data.json')
    const getDate = () => {
        return new Date().toLocaleDateString();
    };
    const [homework, setHomework] = useState('');
    const [time, setTime] = useState('');
    const [done, setDone] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        const duty = {homework, time, done};
        console.log(duty)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                            <td>
                                <label htmlFor=''></label>
                                <input type='text' value={homework} onChange={(e) => setHomework(e.target.value)}>
                                </input>
                            </td>
                            <td>
                                <lable htmlFor=''></lable>
                                <input type='time' value={time} onChange={(e) =>setTime(e.target.value)}>
                                </input>
                            </td>
                            <td>
                                <label htmlFor="checkbox1"></label>
                                <input type="checkbox" id="checkbox1" name="checkbox1" value="done" onChange={(e) => setDone(e.target.value)}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {error && <div>{error}</div>}
                <button type='submit'>Add Task</button>
                <button><a href="/calendar">Calendar</a></button>
                <button><Link to="/">Home</Link></button>
            </form>



                <p>{homework}</p>
                <p>{time}</p>
                <p>{done}</p>


        </div>
    )
}


export default Admin