import { useState } from "react";
import axios from 'axios';
function User() {
    const [resultList, setRessultList] = useState([]);
    const [Time, setTime] = useState("");
    const [Bet, setBet] = useState(0);
    const [Choose, setChoose] = useState("");
    const [Result, setResult] = useState("");
    const [idUser, setIdUser] = useState();
    //Get betting result user by Id_User
    const getResults = () => {
        axios.get("http://localhost:8080/layketqua/bbef383a-6e00-4893-a193-0de462d48ffd")//fix id
        .then((response) =>{
            setRessultList(response.data);
        });
    }
    return (
        <>
            <h1>User</h1>
            <h3>Lịch sử chơi</h3>
            <button onClick={getResults}>Show Result</button>
            <table>
                <tr>
                    <th>Time</th>
                    <th>Bet</th>
                    <th>Choose</th>
                    <th>Result</th>
                </tr>
            </table>
            {resultList.map((val, key) => {
            return (
              <table>
                <tr>
                    <td>{val.Time}</td>
                    <td>{val.Bet}</td>
                    <td>{val.Choose}</td>
                    <td>{val.Result}</td>
                </tr>
              </table>
            );
            })}
        </>
    )
}
export default User