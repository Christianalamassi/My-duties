const Table = ({ props }) => {

    return (
        <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th>Home Work</th>
                            <th>Time</th>
                            <th>Done</th>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                <label htmlFor="checkbox1"></label>
                                <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                <label htmlFor="checkbox1"></label>
                                <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>


            <div>
                {props.map((duties) => (
                    <p key={duties.id}>
                        {duties.homework}
                        {duties.time}
                        {duties.done}
                    </p>))}
            </div>
        </div>
    )
}

export default Table