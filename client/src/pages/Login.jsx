import React, { useState } from "react";

export const Login = () => {	
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
    return(
		<div class="welcomePanel">
			<div class="welcome">
				<h1>Welcome to Mind Over Matter!</h1>
				<p>
					Mind over matter is defined as "the use of willpower to overcome physical problems."
					<br><br>
					While autism is neurological and not physical, it too presents challenges that require willpower to overcome.
					<br><br>
					Our team is creating resources that bring you the latest news on autism and games to help your autistic loved one.
					<br><br>
					This resource is completely free, so please register to start learning and overcoming today.				
					</br></br></br></br>
				</p>
			</div>
			</div>
		
	

	<div id="logo"><img src='../../../logo.png' /></div>

	<div id="formView">
		<div class="formPad">
		  <form class="login">    
			  <h2 class="formlabel" id="login">Log in</h2>
				  <div class="formPanel">
					  <input type="text" id="loginUsername" class="input" placeholder="Username" />			
				  <input type="password" id="loginPassword" class="input" placeholder="Password" />
				  </div>				  
				  <button type="submit" id="loginBtn" class="submit-btn">Log In</button>				  
		  </form>		  		  
		  <form class="signup slide-up">
			  <div class="center">
				<hr>
				  <h2 class="formlabel" id="signup">Sign up</h2>
			  <div class="formPanel">				
				  <input type="text" id="registerUsername" class="input" placeholder="Username" />			
				  <input type="password" id="registerPassword" class="input" placeholder="Password" />
			  </div>
			  <button type="submit" id="registerBtn" class="submit-btn">Register</button>			
			  </div>
		  </form>
	  </div>
	</div>

	  <img src="../../../../autism.jpg" id="puzzle"/>
	

export default Login;