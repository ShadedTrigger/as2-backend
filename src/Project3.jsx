import { Link } from "react-router-dom";

export default function Project3() {
    return (
        <>
            <h1>Project 3: Sunnyside Crepe Website</h1>
            <div className="projectsDescriptionContainer">
                <Link to="https://studentweb.cencol.ca/sjasmins/TermProject/homepage.html">
                    <img src="./project3.png" alt="Screenshot of crepe website" className="project3Image"/>
                </Link>
                <p className="aboutMe">This project is a website created for my COMP213 class for a fictional Creperie. You are able to browse their various menu items, as well visit a contact page. Feel free to click on the picture to visit the website!</p>
            </div>
            <div className="buttons">
                <Link to="/Projects">Back to Projects</Link>
            </div>
        </>
    )
}