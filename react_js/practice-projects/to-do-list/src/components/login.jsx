import { Link } from "react-router-dom"
import { useRef } from "react";
export default function LogIn(){

    const loginID = useRef(null);
    const loginPassword = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        var loginCred = {
            id : loginID.current.value,
            pass : loginPassword.current.value
        }        

        if(loginCred.id && loginCred.pass){
            console.log("Submit");
        }
        else{
            alert("form is invalid");
        }
    }

    return(
        <div className = "container">
            <div className="form-section">
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" id="login_id" ref={loginID} placeholder="Username"/>
                    <input type="password" id = "login_pass" ref={loginPassword} placeholder="Password" />
                    <button type="submit" id = "submitForm">Login</button>
                    <p>Don't have an account? <Link to="/signup">Register</Link></p>
                </form>
            </div>            
        </div>
    )
}