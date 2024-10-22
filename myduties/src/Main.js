import React from 'react';
import { useEffect, useState } from 'react';


const Main = () => {

    const [homework, setHomework] = useState('');
    const [time, setTime] = useState('');
    const [done, setDone] = useState('');
    const [data, setData] = useState(null); // Initialize as `null` to indicate loading state
    const [error, setError] = useState(null); // Error state
    const handleSubmit = () => {

    }


    const handlesupmit = (e) => {
        e.preventDefault()
        const duty = { homework, time, done }

        fetch('/data.json', {
            method: 'Post',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(duty)
        })
    }

    const getDate = () => {
        return new Date().toLocaleDateString();
    };

    useEffect(() => {
        // Fetch the data from the JSON file in the public folder
        fetch('/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse JSON data
            })
            .then((data) => {
                setData(data.duty); // Set the 'users' array to `data`
            })
            .catch((error) => {
                console.error('Error, can not find the data', error);
                setError(error.message); // Set error message
            });
    }, []); // Empty dependency array ensures this effect runs only once


    // Display an error message if fetch fails
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Display a loading state if data is still `null`
    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <form onSubmit={handlesupmit}>
                <h1>The tasks of today</h1>
                <div className='box'>{getDate()}</div>
                <table>
                    <tr>
                        <th>Home Work</th>
                        <th>Time</th>
                        <th>Done</th>
                        <th>Edite</th>
                    </tr>
                    <tr>
                        <td>
                            <input></input>
                        </td>

                        <td>
                            <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input>
                        </td>

                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                        </td>

                        <td>
                            <button>Save</button> <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input></input>
                        </td>

                        <td>
                            <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input>
                        </td>

                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                        </td>

                        <td>
                            <button>Save</button> <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input></input>
                        </td>

                        <td>
                            <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input>
                        </td>

                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                        </td>

                        <td>
                            <button>Save</button> <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input></input>
                        </td>

                        <td>
                            <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input>
                        </td>

                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                        </td>

                        <td>
                            <button>Save</button> <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input></input>
                        </td>

                        <td>
                            <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input>
                        </td>

                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                        </td>

                        <td>
                            <button>Save</button> <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input></input>
                        </td>

                        <td>
                            <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input>
                        </td>

                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                        </td>

                        <td>
                            <button>Save</button> <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input></input>
                        </td>

                        <td>
                            <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input>
                        </td>

                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                        </td>

                        <td>
                            <button>Save</button> <button>Delete</button>
                        </td>
                    </tr>
                </table>

                <button onClick={handleSubmit}>Submit</button>
                <button><a href="/">Calendar</a></button>
            </form>
        </div>
    )
}


export default Main