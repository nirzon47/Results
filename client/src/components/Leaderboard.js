import "../App.css";
import { useState } from "react";
import './Leaderboard.css';
import Axios from "axios";

function Leaderboard() {

    function refreshPage() {
        window.location.reload(false);
      }

    const [records, setRecords] = useState([]);
    const [newName, setNewName] = useState("");
 
    const getRecords = () => {
        Axios.get("http://localhost:4200/records").then((response) => {
        setRecords(response.data);
        });
    };

    const updateName = (roll) => {
        Axios.put("http://localhost:4200/update", {newName: newName, roll: roll}).then(() => {
            alert("Your Name is updated. Please refresh to view changes.");
            });
    };

    const deleteRecord = (roll) => {
        Axios.delete(`http://localhost:4200/delete/${roll}`);
    }

    return(
        <div className="container">
            <div className="headings">
                <h5>Roll Number</h5>
                <h5>Name</h5>
                <h5>Physics</h5>
                <h5>Chemistry</h5>
                <h5>Mathematics</h5>
                <h5>Total score</h5>
                <h5>Percentage (%)</h5>
                <h5>Make Changes Here</h5>
            </div>
            {window.onload = getRecords}
            {records.map((val, key) => {
                return(
                    <div className="data">
                            <h5>{val.roll}</h5>
                            <h5>{val.name}</h5>
                            <h5>{val.math}</h5>
                            <h5>{val.phy}</h5>
                            <h5>{val.chem}</h5>
                            <h5>{val.total}</h5>
                            <h5>{val.percent}</h5>
                        <div className='update'>
                            <input
                                className='updateInput'
                                type='text'
                                placeholder="New Name"
                                onChange={(event) => {
                                    setNewName(event.target.value);
                                }}
                                
                            />
                            <button onClick={()=>{updateName(val.roll); refreshPage();}}>Update</button>
                            <button className="Delete" onClick={()=>{deleteRecord(val.roll); refreshPage();}}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )


}

export default Leaderboard
