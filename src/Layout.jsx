import { Link } from 'react-router-dom'

export default function Layout() {
    return (
        <nav>
            <img src="./logo.png" alt="logo" className="logo" width={50}/>
            <p>Sean's Portfoilo</p>
            <div className="nav-links">
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/projects">Projects</Link>
            <Link to ="/services">Services</Link>
            <Link to ="/contact">Contact</Link>
            </div>
        </nav>
    )
}