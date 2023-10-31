import React from "react";

function Home() {
    return(
<div class= "app" > 
<div class="header">
     <h1>Welcome</h1>
</div>    
<div class="content">
    <h2>About Autism<h2>
    <p>Autism spectrum disorder <span>ASD</span> is a neurological and developmental disorder that affects how people interact with others, communicate, learn, and behave. Although autism can be diagnosed at any age, it is described as a “developmental disorder” because symptoms generally appear in the first 2 years of life.  To learn more about autism, please visit <a href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd#:~:text=Autism%20Spectrum%20Disorder-,Overview,first%202%20years%20of%20life.">here</a>.</p></p>

        <h2>Resources</h2>
        <hr />
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
                <a href="https://steadystridesaba.com/?gad_source=1&gclid=CjwKCAjw-eKpBhAbEiwAqFL0mvr5CdLPeMOg4Bmrd8SscQHtQvReHbevD-Lyt8T67x2AtvSPyXNInBoCAKMQAvD_BwE">here</a>.</p>
            <hr />
             <!--Challenges for Parents - Main for game-->

            <h3 className="heading-3"><span>Challenges for Parents of Autistic Children</span></h3>
            <i class="fa-solid fa-children" style="font-size:40px;"></i>
            <p className="challenges">Parents of Autistic children are considered superheroes.  They are the support system and enablers of beautiful individuals with unique abilities.  There are new challenges for the family that come forth daily.  These challenges can be both enjoyable and stressful at times.Some common challenges of parenting an Autistic child include:</p>
            <ul className="challenge-list">
                <li>Finances</li>
                <li>Stress</li>
                <li>Lack of Time for Self-Care</li>
                <li>Communication Challenges</li>
                <li>Stigmatism</li>
            </ul>
            <p className="challenge-link-1">For more information on common challenges of parenting an Autistic child, please visit <a href="https://caliberautism.com/blog/Common-Challenges-of-Parenting-an-Autistic-Child">here</a>.</p>
            <p className="challenge-link-1">If you are father that is in need of support, please visit this <a href="https://podcasters.spotify.com/pod/show/realunfiltereddadjourneys?fbclid=IwAR0rYAcEEiAmpZQ73TV3XoVfhaBehRfuuwFluD-Whkh5ZdA842t80cQQJqQ">Podcast</a>.</p>
            <hr />
            <!--Homebased Therapy - Main for game-->
            <h3 className="heading-4"><span>Home-Based Therapy Games for Children with Autism</span></h3>
            <i class="fa-solid fa-puzzle-piece" style="font-size:40px;"></i>
            <p className="home-based-therapy">Mind Over Matter would like to help the Autsim community with fun home-based therapy games that you can do in the comfort of your home.  Please click the tabs below for access to those games.</p>
           
                <a href="{/*INSERT PAGE LINK*/}"></a><button>Memory Game</button></li> {/*Need to add link to page*/} 
            <hr/>
           
            <h3 className="heading-5"><span>Would you like to donate to Autism research or donate to Autsim support?</span></h3>
            <i class="fa-solid fa-hands-holding-child" style="font-size:40px;"></i>

            <p className="donation-link-1">If you would like to donate to an organization that supports autism, please visit this site for the most popular donation sites in the country<a href="https://www.appliedbehavioranalysisprograms.com/best-autism-charities/">here</a>.</p>
            <p className="option"><span>Or Not Sure Where to Donate?</span></p>
            <p className="donation-link-2">Donate with us and we will choose a donation destination for you.  One hundred percent of the donation will go to that destination, and we will provide proof of that donation to you.</p>
            <a href="{/*INSERT PAGE LINK*/}"><button>Donate Through Us</button></a> {/*Need to add link to page*/}
            </div>
  
            <div class="footer">
            <footer>
            <p>Powered by MindOverMatter 2023</p>
            <i class="fas fa-heart" style="font-size:25px;"></i>
        </footer>
      </div>
    </div>
)
}
export default Home;