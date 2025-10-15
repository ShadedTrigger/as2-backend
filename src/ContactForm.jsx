import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === "firstName") {
            setFirstName(value);
        } else if (name === "lastName") {
            setLastName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/");
    }

    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <label>First Name: <input type="text" value={firstName} onChange={handleChange} name="firstName" /> </label>
            <label>Last Name: <input type="text" value={lastName} onChange={handleChange} name="lastName" /> </label>
            <label>Email: <input type="email" value={email} onChange={handleChange} name="email" /> </label>
            <label>Message: <textarea value={message} onChange={handleChange} name="message" /> </label>
            <button type="submit">Submit</button>
        </form>
    )
}