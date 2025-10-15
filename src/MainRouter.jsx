import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import Contact from './Contact.jsx'
import Layout from './Layout.jsx'
import Project1 from "./Project1.jsx";
import Project2 from "./Project2.jsx";
import Project3 from "./Project3.jsx";

const MainRouter = () => {
    return (
    <>
        <Layout/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Project1" element={<Project1 />} />
            <Route path="/Project2" element={<Project2 />} />
            <Route path="/Project3" element={<Project3 />} />
        </Routes>
    </>
    )
}

export default MainRouter