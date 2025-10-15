import { Link } from "react-router-dom";

export default function Project1() {
    return (
        <>
            <h1>Project 1: Bug Smasher Game</h1>
            <div className="projectsDescriptionContainer">
                <img src="./project1.png" alt="Screenshot of my Bug Smasher Game" className="project1Image"/>
                <p className="aboutMe">This project is a game where you smash bugs created for my Client-Side Web Development class! This is a simple game where you click on the bug to smash it, and it speeds up over time.</p>
            </div>
            <div className="buttons">
                <Link to="/Projects">Back to Projects</Link>
            </div>
        </>
    )
}