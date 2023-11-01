import React, { useState } from "react";
import {useMutation} from "@apollo/client";
import {ADD_USER, LOGIN_USER} from "../utils/mutations";
import Auth from "../components/auth/authService";
import "../styles/styles.css";
// import loginWidget from "../styles/loginWidget";
export const Login = () => {	
	

	const [formData, setFormData] = useState({userName: "", password: ""});
	const [ addUser ] = useMutation(ADD_USER);
	const [ login ] = useMutation(LOGIN_USER);
// function that tracks input changes on login and signup forms
const handleChange =  (event) => {
const {name, value} = event.target
setFormData({...formData, [name]: value})
}

console.log(formData)
// submit function to take current state of form inputs and use them as mutation arguments
const handleRegisterSubmit = async (event)=>{
event.preventDefault()
try{
const {data} = await addUser({
	variables :{...formData}
})

Auth.login(data.addUser.token)
}catch(err){
console.log(err)
}
window.location.assign("/home")
}

const handleLoginSubmit = async (event)=>{
	event.preventDefault()
	try{
	const {data} = await login({
		variables :{...formData}
	})
	
	Auth.login(data.login.token)
	}catch(err){
	console.log(err)
	}
	window.location.assign("/home")
	};
	
    return(	
		<section id="loginPage">
		<div><img src="images/logo.png" id="logo"></img>

		<div className="welcomePanel">
			<div className="welcome">
				<h1>Welcome to Mind Over Matter!</h1>
				<p>
					Mind over matter is defined as "the use of willpower to overcome physical problems."
					</p>
					While autism is neurological and not physical, it too presents challenges that require willpower to overcome.
					<p>
					Our team is creating resources that bring you the latest news on autism and games to help your autistic loved one.
					</p>
					This resource is completely free, so please register to start learning and overcoming today.

					<img src="images/autism.jpg" id="puzzle"/>				
			</div>			
		</div>

	    <div class="background">
        	<div class="shape"></div>
        	<div class="shape"></div>
		</div>

		<div class="loginForm" onSubmit={handleLoginSubmit}>
    
			<form>
				<h3 id="loginTitle">Login</h3>				

				<label for="username" id="userNameLabel">Username</label>
				<input type="text" id="loginUsername" name="userName" onChange={handleChange} className="input" />

				<label for="password" id="passwordLabel">Password</label>
				<input type="password" id="loginPassword" name="password" onChange={handleChange} className="input" />

				<button type="submit" id="loginBtn" className="submit-btn">Log In</button>
			</form>

		</div>

		<div class="registerForm">
			<form onSubmit={handleRegisterSubmit}>
				<h3 id="registerTitle">Register</h3>				
				
				<label for="username" id="userNameLabel">Username</label>
				<input type="text" id="loginUsername" name="userName" onChange={handleChange} className="input" />				
				
				<label for="password" id="passwordLabel">Password</label>
				<input type="password" id="loginPassword" name="password" onChange={handleChange} className="input"/>

				<button id="registerBtn">Register</button>
			</form>
		</div>


	</div>
	
	</section>		)
};
	

export default Login;