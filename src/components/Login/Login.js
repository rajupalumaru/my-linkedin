import React, { useState } from 'react';
import './Login.css';
import LinkedinLogo from './../../Assets/Linkedin-Logo.png'

const Login = () => {
    const [singup, setSignup] = useState(false);

    const [name, setName] = useState("");
    const [PhotoUrl, setPhotUrl] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
        
        if(!name){
            return alert("Name is required.")
        }
        if(!PhotoUrl){
            return alert("PhotoUrl is required.")
        }
        if(!email){
            return alert("email is required.")
        }
        if(!password){
            return alert("password is required.")
        }
        setName("");
        setPhotUrl("");
        setEmail("");
        setPassword("");



    }
    return (
        <div className="loginScreen">
            <img src={LinkedinLogo} />
            {singup === true ? (

                <form onSubmit={register}>
                    <input type="text" placeholder="Full Name (Required if registered)" value={name} onChange={e=>setName(e.target.value)} />
                    <input type="text" placeholder="Profile picture Url" value={PhotoUrl} onChange={e=>setPhotUrl(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <input type="submit" value='Sign Up' />

                    <h4>Already a member ? <span onClick={e => setSignup(false)}>Login Here</span></h4>
                </form>
            ) : (
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value='Sign In' />

                    <h4>Not a member ? <span onClick={e => setSignup(true)}>Register Here</span></h4>
                </form>
            )}



        </div>
    )
}

export default Login
