import { useState } from "react";
import App from "../App";
export function Signup(){

    const handleSubmit = (event) => {
        event.preventDefault();
        <App></App>
    }


    const [username, setUsername] = useState('');
    const [emailID, setemailID] = useState('');
    const [password, setPassword] = useState('');
    return(
        <>
            <form action="signupPage" onSubmit={handleSubmit}>
                <input type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                <input type="email" value={emailID} placeholder="Email ID" onChange={(event) => setemailID(event.target.value)}/>
                <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                <button type = "submit">Sign Up</button>
            </form>
        </>
    )
}