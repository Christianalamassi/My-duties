import React from 'react';
// import { useState } from 'react';

const Main = () => {

    const getDate = () => {
        return new Date().toLocaleDateString();
    };

    return (
        <div>
            <form>
                <h1>The tasks of today</h1>
                <div className='box'>{getDate()}</div>
                <table>
                    <tr>
                        <th>Home Work</th>
                        <th>Time</th>
                        <th>Done</th>
                    </tr>
                    <tr>
                        <td><input></input></td>
                        <td> <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input></td>
                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input></td>
                    </tr>
                    <tr>
                        <td><input></input></td>
                        <td> <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input></td>
                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input></td>
                    </tr>
                    <tr>
                        <td><input></input></td>
                        <td> <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input></td>
                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input></td>
                    </tr>
                    <tr>
                        <td><input></input></td>
                        <td> <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input></td>
                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input></td>
                    </tr>
                    <tr>
                        <td><input></input></td>
                        <td> <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input></td>
                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input></td>
                    </tr>
                    <tr>
                        <td><input></input></td>
                        <td> <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input></td>
                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input></td>
                    </tr>
                    <tr>
                        <td><input></input></td>
                        <td> <label for="time1"></label>
                            <input type="time" id="time1" name="time1"></input></td>
                        <td>
                            <label for="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input></td>
                    </tr>
                </table>
                <button type='submit'> Submit</button>
            </form>
        </div>
    )
}

export default Main