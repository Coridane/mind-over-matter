import React from "react";
//CSS
import "./header.scss";
//IMAGES
import { Logo } from //need to put logo here
//import "../../../node_modules
//import ImgExample from "../../Images/logo-react.png";

export default function Header(props) {
	return (
		<div
			style={{
				padding: "40px",
			}}
		>
			<h1>Mind Over Matter</h1>
			<ul>
				<li>Thank you for checking out our site..</li>
				<li>
			    The site and game were set up to help educate and provide resources for young adults with learning disabilites such as Autism
				</li>
				<li>
				If you would like to Donate,visit the link below. 
				</li>
				<li>.</li>
			</ul>
			<h5>Logo-component:</h5>
			<Logo
				className="header-image-example"
				src={ImgExample}
				width={150}
				effect="blur"
			/>
		</div>
	);
}

  

  

//.home-container{
  //display: block;
    //background-repeat: no-repeat;background-size: cover;
    //justify-content: center;
    //align-items: center;
    //max-width: 100%;
   // height: auto;
   // background-position: center;
    //background-image: url(../assets/images/unsplash.png);




//function Donation() {return (
    //<div className="donation-container">
     // <h2 className="donation-heading">Donation</h2>
     // <p>If you'd like to support our the site, you can donate using the button below:</p>
     // <button className="donation-button">Donate</button>
   // </div>
  ////);
//}

//const Home = () => {
  //! return (
//export default Home;