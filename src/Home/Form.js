import React, { useState } from 'react';
import EmailChecker from '../Usages/Email';

function Form() {

    // useState variables
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [okmessage, setokMessage] = useState('');
    var [nomessage, setnoMessage] = useState('');

    // validation error states
    var [emailError, setEmailError] = useState('');
    var [passwordError, setPasswordError] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault(); // ✅ Prevent form reload

        var error = 0

        if (email.length < 3 || !EmailChecker(email)) {
            setEmailError('Enter a valid email');
            error++;
        } else {
            setEmailError('');
            
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            error++;
        } else {
            setPasswordError('');
        }

        console.log(error);

        if (error == 0) {
            var ApiInput = {
                email: email,
                password: password
            };

            try {
                var apiResponse = await fetch('https://api.softwareschool.co/auth/login', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(ApiInput)
                });

                const result = await apiResponse.json(); 
                console.log( result);
                if(result.result === "SUCCESS") {
                    console.log(result.message); // change here using the useState 
                    setokMessage("Login Success.");
                    setnoMessage('');
                    var Id = result.data.id
                    localStorage.setItem('userId',Id ); // bring it with key value 
                    localStorage.getItem('userId'); 
                    window.location.href = "/courses"; // redirected it to courses page 
                    console.log("Logged in successfully.");

                }
                else {
                    console.log(result.message); // change here using the useState 
                    setokMessage('');
                    setnoMessage("Login Failed.");
                }
               
            } catch (err) {
                console.error("404  Error:", err);
            }
        }
    }

    

    return(
        <div className="card p-4 shadow-sm">
            <h4 className="mb-3 text-center text-info">Login / Sign Up</h4>
            <div className="text-white bg-success text-center p-3">{okmessage}</div>
            <div className="text-white bg-danger text-center p-3 ">{nomessage}</div>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label> {/* ✅ fixed input="email" */}
                    <input
                        type="email"
                        onChange={e => handleEmail(e)}
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                    />
                    <div className="text-danger">{emailError}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label> {/* ✅ fixed input="password" */}
                    <input
                        type="password"
                        onChange={e => handlePassword(e)}
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                    />
                    <div className="text-danger">{passwordError}</div>
                </div>
                <div className="text-center mt-3 d-grid">
                    <button
                        type="submit"
                        onClick={e => handleSubmit(e)} // ✅ fixed onClick
                        className="btn btn-info shadow-sm"
                    >
                        Login
                    </button>
                    <small>Don't have an account? <a href="/signup">Sign Up</a></small>
                </div>
            </form>
        </div>
    );
}

export default Form;
