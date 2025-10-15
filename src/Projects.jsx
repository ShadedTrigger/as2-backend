import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <>
        <h1>My Projects</h1>
        <h3>Click on any of the screenshots to learn more about each project!</h3>
        <div className="gridContainer">
            <div className="gridItem">
                <h2>Project 1: Bug Smasher Game</h2>
                <Link to="/Project1">
                    <img src="./project1.png" alt="Screenshot of my Bug Smasher Game" className="project1Image"/>
                </Link>
            </div>
            <div className="gridItem">
                <h2>Project 2: Gravity Flux</h2>
                <Link to="/Project2">
                    <img src="./project2.png" alt="Screenshot of my Gravity Flux Game" className="project2Image"/>
                </Link>
            </div>
            <div className="gridItem">
                <h2>Project 3: Website for Creperie</h2>
                <Link to="/Project3">
                    <img src="./project3.png" alt="Screenshot of Creperie Website" className="project3Image"/>
                </Link>
            </div>
        </div>
        </>
    )
}