import React from "react";
// import "../pages/styles";

function Homepage() {
    return (
        <div><img src="images/logo.png" id="logo"></img>
        {/*About Autism with link to page*/}
        <div className="container-homepage">
            <h3 className="heading-1"><span>About Autism</span></h3>
            <p className="about-autism">Autism spectrum disorder <span>ASD</span> is a neurological and developmental disorder that affects how people interact with others, communicate, learn, and behave. Although autism can be diagnosed at any age, it is described as a “developmental disorder” because symptoms generally appear in the first 2 years of life.  To learn more about autism, please visit <a href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd#:~:text=Autism%20Spectrum%20Disorder-,Overview,first%202%20years%20of%20life." target="blank">The National Institute of Mental Health</a>.</p>
            <hr />

        {/*What steps should you take as a parent?*/}
            <h3 className="heading-2"><span>What Steps Should You Take?</span></h3>
            <ul className="steps-list">
                <li>Learn About Autism</li>
                <li>Insurance Management</li>
                <li>Assessment</li>
                <li>Home-Based Therapy</li>
                <li>School Support</li>
                <li>Parent Training</li>
                <li>Parent Support</li>
            </ul>
            <p className="steps-link">For more information on what steps parents should take, please visit 
            <a href="https://steadystridesaba.com/?gad_source=1&gclid=CjwKCAjw-eKpBhAbEiwAqFL0mvr5CdLPeMOg4Bmrd8SscQHtQvReHbevD-Lyt8T67x2AtvSPyXNInBoCAKMQAvD_BwE" target="blank"> Steady Strides ABA</a>.</p>
            <hr />

        {/*Challenges for parents*/}
        <h3 className="heading-3"><span>Challenges for Parents of Autistic Children</span></h3>
            <p className="challenges">Parents of Autistic children are considered superheroes.  They are the support system and enablers of beautiful individuals with unique abilities.  There are new challenges for the family that come forth daily.  These challenges can be both enjoyable and stressful at times.</p>
            <p className="challenge-types">Some common challenges of parenting an Autistic child include:</p>
            <ul className="challenge-list">
                <li>Finances</li>
                <li>Stress</li>
                <li>Lack of Time for Self-Care</li>
                <li>Communication Challenges</li>
                <li>Stigmatism</li>
            </ul>
            <p className="challenge-link-1">For more information on common challenges of parenting an Autistic child, please visit <a href="https://caliberautism.com/blog/Common-Challenges-of-Parenting-an-Autistic-Child" target="blank">Caliber Autism & Pediatric Therapy</a>.</p>
            <p className="challenge-link-2">If you are father that is in need of support, please visit <a href="https://podcasters.spotify.com/pod/show/realunfiltereddadjourneys?fbclid=IwAR0rYAcEEiAmpZQ73TV3XoVfhaBehRfuuwFluD-Whkh5ZdA842t80cQQJqQ" target="blank">Real Unfiltered Dad Journeys</a>.</p>
            <hr />

        {/*Homebased Therapy - Main for game*/} 
            <h3 className="heading-4"><span>Home-Based Therapy Games for Children with Autism</span></h3>
            <p className="home-based-therapy">Mind Over Matter would like to help the Autsim community with fun home-based therapy games that you can do in the comfort of your home.  Please click the tabs below for access to those games.</p>
            <ul className="game-list">
            <a href="/game"><button id="gameBtn">Memory Game</button></a> {/*Need to add link to page*/}  
            </ul> 
            <hr />

        {/*Donation sites and donation link*/}
        <h3 className="heading-5"><span>Would you like to donate to Autism research or donate to Autsim support?</span></h3>
            <p className="donation-link-1">If you would like to donate to an organization that supports autism, please visit this site for the most popular donation sites in the country<a href="https://www.appliedbehavioranalysisprograms.com/best-autism-charities/" target="blank"> Applied Behavior Analysis Progerams Guide</a>.</p>
            <p className="option"><span>Or not sure where to donate?</span></p>
            <p className="donation-link-2">Donate with us and we will choose a donation destination for you.  One hundred percent of the donation will go to that destination, and we will provide proof of that donation to you.</p>
            <a href="https://donate.stripe.com/test_bIYfZT2SobC2bW8fYY" target="_blank"><button id="stripeBtn">Stripe Donation</button></a>
            <hr />
        </div>
        </div>
    );
}


export default Homepage;