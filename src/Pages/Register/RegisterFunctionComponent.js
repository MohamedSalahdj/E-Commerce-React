import { useState } from "react";
import HeaderFormComponent from "../../Components/HeaderFormComponent";
import MessageErrorComponent from "../../Components/MessageErrorcomponent";
import { Link } from "react-router-dom"
import '../Login/Login.css'

function RegisterFunctionComponent () {

    function checkWhitespace(str) { 
            return /\s/.test(str); 
        } 

    const [registerFormData, setRegisterFormData] = useState({
        name : "",
        email : "",
        userName : "",
        password : ""

    })    

    const [passwordType, setPasswordType] = useState("password")

    const [registerFormErrors, setRegisterFormErrors] = useState({
        nameError : "",
        emailError : "",
        userNameError : "",
        passwordError1 : "",
        passwordError2 : ""
    })

    const [formMessage, setFormMessage] = useState('')

    const changeFormData = (e) => {
        // make name field requird 
        if (e.target.name == "name" ){
            setRegisterFormData({
                ...registerFormData,
                name : e.target.value
            })
            setRegisterFormErrors({
                ...registerFormErrors,
                nameError : e.target.value.length == 0 ? "Name Field Is Required" : "name vaild"
            })
        }
        else if (e.target.name == "email") {
            setRegisterFormData({
                ...registerFormData,
                email : e.target.value
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
                emailmessage = null
            }
            setRegisterFormErrors({
                ...registerFormErrors,
                emailError : emailmessage
            })   
        }
        else if (e.target.name == "userName"){
            setRegisterFormData({
                ...registerFormData,
                userName : e.target.value
            })
            let userNameMessage;
            if (e.target.value.length == 0) {
                userNameMessage = "User Name Field Is required"
            }
            else if (checkWhitespace(e.target.value)){
                userNameMessage = "username must non contain space"
            }
            else {
                userNameMessage = null
            }
            setRegisterFormErrors({
                ...registerFormErrors,
                userNameError : userNameMessage
            })
        }
        else if (e.target.name == "password1") {
            setRegisterFormData({
                ...registerFormData,
                password : e.target.value
            })
            let passwordMessage;
              const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/;

                if (e.target.value.length == 0 ){
                    passwordMessage = "Password Field is requird"
                }
                else if (e.target.value.length <= 8){
                    passwordMessage = "Password must be greater than 8 character"
                }
                else if (!passwordRegex.test(e.target.value)){
                    passwordMessage = "Password must contain contains at least onelowercase , one uppercase , at least one digit and special character [ example : *@%$#"   
                }
                else {
                    passwordMessage = null
                }
            setRegisterFormErrors({
                ...registerFormErrors,
                passwordError1 : passwordMessage
            })
        }
        else if (e.target.name == "password2") {
            setRegisterFormErrors({
                ...registerFormErrors,
                passwordError2 : e.target.value != registerFormData.password ? "password don't match" : "password matched"
            })
        }

    }
    const togglePasswordVisibility = () => {
        passwordType == "password" ? setPasswordType("text") : setPasswordType("password")
   }

   const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { ...registerFormData };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const current_user = users.find((user) => user.email === newUser.email);

    if (current_user) {
        setFormMessage('Email already exists!');
    }else if(registerFormErrors.nameError == 'name vaild' && registerFormErrors.emailError == null && registerFormErrors.passwordError1 == null && registerFormErrors.passwordError2 == 'password matched'){
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setFormMessage('User registered successfully!');
    } 
    
    else {
        setFormMessage('Enter Vaild Data');

    }
};

    return (
        <>
         <div className="mt-3 mx-auto"  style={{"width":"150px"}}>
          <img src='ecommerce.png' style={{"width":"100%","height":"150px"}} className="d-block"/>
        </div>
        <div className="container mb-5">

        <div className="col-lg-5 col-md-7 col-sm-9 p-4 mt-2 mx-auto border bg-white rounded">
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label ">Name</label>
                    <input type="text" className="form-control" 
                        id="exampleInputName" name="name" 
                        aria-describedby="emailHelp"  
                        onChange={(e)=> changeFormData(e)}
                    />
                    <MessageErrorComponent classErrorMessage="danger" messageError={registerFormErrors.nameError} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label ">Email</label>
                    <input type="email" className="form-control" 
                        id="exampleInputEmail1" name="email" 
                        aria-describedby="emailHelp"  
                        onChange={(e)=> changeFormData(e)}
                    />
                    <MessageErrorComponent classErrorMessage={registerFormErrors.emailError === "Vaild Email" ? "success" : "danger"} messageError={registerFormErrors.emailError} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label ">User Name</label>
                    <input type="text" className="form-control" 
                        id="exampleInputUserName" name="userName" 
                        aria-describedby="emailHelp" 
                        onChange={(e)=> changeFormData(e)} 
                    />
                    <MessageErrorComponent classErrorMessage="danger" messageError={registerFormErrors.userNameError} />
                </div>

                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div className="d-flex form-control">
                    <input type={passwordType} className="form-control border-0 form-edit" 
                        id="exampleInputPassword" name="password1" 
                        onChange={(e)=> changeFormData(e)}
                    
                    />
                     <button type="button" className="btn" onClick={() => togglePasswordVisibility()}>
                        <i class="bi bi-eye-slash" id="togglePassword"></i>
                     </button>
                    </div>
                    <MessageErrorComponent classErrorMessage={"danger"} messageError={registerFormErrors.passwordError1} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <div className="d-flex form-control">
                    <input type={passwordType} className="form-control border-0 form-edit" 
                        id="exampleInputPassword" name="password2" 
                        onChange={(e)=> changeFormData(e)}
                    
                    />
                     <button type="button" className="btn" onClick={() => togglePasswordVisibility()}>
                        <i class="bi bi-eye-slash" id="togglePassword"></i>
                     </button>
                    </div>
                    <MessageErrorComponent classErrorMessage={registerFormErrors.passwordError2 == "password don't match" ? "danger" : "success"} messageError={registerFormErrors.passwordError2} />
                </div>
                <MessageErrorComponent classErrorMessage={formMessage == "User registered successfully!" ? "success" : "danger"} messageError={formMessage} />

                <button type="submit" className="btn btn-success w-100 btn-form">Register</button>
                <div className="mt-3 ">
                    <p className="text-center">Already have an account? <Link to='/login'>Sign in</Link></p>
                </div>
            </form>
            </div>
            </div>
        
        </>
    )
}

export default RegisterFunctionComponent;