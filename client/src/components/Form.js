import "../App.css";
import { useState } from "react";
import './Form.css';
import Axios from "axios";

function Form() {

    const [roll, setRoll] = useState(0);
    const [name, setName] = useState("");
    const [math, setMath] = useState(0);
    const [phy, setPhy] = useState(0);
    const [chem, setChem] = useState(0);

	const addRecord = () => {
		Axios.post("http://localhost:4200/create", {
			roll: roll,
			name: name,
			math: math,
			phy: phy,
			chem: chem,
		}).then(()=>{
			alert("Your data is recorded, view leaderboards or refresh to add more data.");
		});
	};

    return (
        <form className='form-container'>
            <h1>Enter your details here</h1>
            <div className='form-main'>
                <label>Enter your name:</label>
                <input
                    className='input-field'
                    type="text"
                    onChange={(event) => {setName(event.target.value)}}
                />
            </div>
            <div className='form-main'>
                <label>Enter your roll number:</label>
                <input
                    className='input-field'
                    type='number' min='0' max='100'
                    onChange={(event) => {setRoll(event.target.value)}}
                />
            </div>
            <div className='form-main'>
                <label>Enter your maths score:</label>
                <input
                    className='input-field'
                    type='number' min='0' max='100'
                    onChange={(event) => {setMath(event.target.value)}}
                />
            </div>
            <div className='form-main'>
                <label>Enter your physics score:</label>
                <input
                    className='input-field'
                    type='number' min='0' max='100'
                    onChange={(event) => {setPhy(event.target.value)}}
                />
            </div>
            <div className='form-main'>
                <label>Enter your chemistry score:</label>
                <input
                    className='input-field'
                    type='number' min='0' max='100'
                    onChange={(event) => {setChem(event.target.value)}}
                />
            </div>
            <button id='submit-button' onClick = { addRecord } type="submit">Submit</button>
        </form>
    )
}

export default Form
