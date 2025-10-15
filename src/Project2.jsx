import { Link } from "react-router-dom";

export default function Project2() {
    return (
        <>
            <h1>Project 2: Gravity Flux</h1>
            <div className="projectsDescriptionContainer">
                <img src="./project2.png" alt="Screenshot of my Gravity Flux Game" className="project2Image"/>
                <p className="aboutMe">This project is a game created by myself and others in my class during a Game Programming course at another college. You fight to escape a facility using bombs and have the special ability to flip gravity! My role in this project was doing the majority of the Gameplay Programming.</p>
            </div>
            <div className="buttons">
                <Link to="/Projects">Back to Projects</Link>
            </div>
        </>
    )
}