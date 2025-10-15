import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Welcome!</h1>
            <h2>Thanks for visiting my Portfolio!</h2>
            <p>Feel free to click any of the buttons below to find out more about me.</p>
            <div className="buttons">
                <Link to ="/about">About Me</Link>
                <Link to ="/projects"> My Projects</Link>
            </div>

            <h2 className="missionStatement">Mission Statement</h2>
            <h3>To always be inquisitive, and never stop learning.</h3>
        </>
    )
}