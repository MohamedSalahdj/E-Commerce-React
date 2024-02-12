import { useState } from "react";
import MessageErrorComponent from "../../Components/MessageErrorcomponent";
import HeaderFormComponent from "../../Components/HeaderFormComponent";
import { Link } from "react-router-dom"

import './Login.css';

function LoginFunctionComponent() {
    
    const[loginData, setLoginDate] = useState({
        email: "",
        password : ""
    })

    const [passwordType, setPasswordType] = useState("password")

    const [loginErrors, setLoginErrors] = useState({
        emailError : "",
        passwordError : ""
    })
    
    // emial Is Requird
   const changeUserDate = (e) => {
    if (e.target.name == "email"){
        setLoginDate({
            ...loginData,
            email: e.target.value
        })
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/;
        let emailmessage;
        if(e.target.value.length == 0){
            emailmessage= "Email Field Is Required"
        }
        else if (!emailRegex.test(e.target.value)){
            emailmessage = "Enter vaild emial ex. mohamed@gmail.com"
        }
        else {
            emailmessage = "vaild Email"
        }

        setLoginErrors({
            ...loginErrors,
            emailError : emailmessage
        })


    }else if (e.target.name == "password"){
        setLoginDate({
            ...loginData,
            password: e.target.value
        })
        let passwordErrorMessage;
            if (e.target.value.length == 0) {
                passwordErrorMessage = "Password Field is requird" ;
            } else if (e.target.value.length <= 8) {
                passwordErrorMessage = "Password must be greater than 8 character";
            }else {
                passwordErrorMessage = "Password correct"   
            }

        setLoginErrors({
            ...loginErrors,
            passwordError :passwordErrorMessage
        })
    }
   }
   const togglePasswordVisibility = () => {
        passwordType == "password" ? setPasswordType("text") : setPasswordType("password")
   }
   
   const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user with matching email and password
    const user = users.find((user) => user.email === loginData.email && user.password === loginData.password);

    if (user) {
        // User found, perform login action (e.g., redirect to dashboard)
        alert('Login successful!');
        // Redirect or navigate to another page
        // Example: window.location.href = 'dashboard.html';
    } else {
        // User not found or incorrect credentials
        alert('Invalid email or password. Please try again.');
    }
};


    return (
        <>
        <div className="mt-5 mx-auto"  style={{"width":"150px"}}>
          <img src='ecommerce.png' style={{"width":"100%","height":"150px"}} className="d-block"/>
        </div>
        <div className="w-25 p-3 my-3 mx-auto border bg-white rounded">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                    <input type="email" className="form-control" 
                        id="exampleInputEmail" name="email" 
                        aria-describedby="emailHelp" 
                        onChange={(e)=> changeUserDate(e)} 
                    />
                    <MessageErrorComponent classErrorMessage={loginErrors.emailError === "vaild Email" ? "success" : "danger"} messageError={loginErrors.emailError}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div className="d-flex form-control">
                    <input type={passwordType} className="form-control border-0 form-edit" 
                        id="exampleInputPassword" name="password" 
                        onChange={(e)=> changeUserDate(e)} 
                    
                    />
                     <button type="button" className="btn" onClick={() => togglePasswordVisibility()}>
                        <i class="bi bi-eye-slash" id="togglePassword"></i>
                     </button>
                    </div>
                    <MessageErrorComponent classErrorMessage={loginErrors.passwordError === "Password correct" ? "success" : "danger"} messageError={loginErrors.passwordError}/>
                </div>
                <button type="submit" className="w-100 btn text-light btn-form">Login</button>
                <hr className="w-75 mx-auto"></hr>
                <div className="mx-auto">
                    <p className="text-center">Don't have account? <Link to="/register">sign up</Link></p>
                </div>
            </form>
        </div>
        </>
    )

}

export default LoginFunctionComponent;