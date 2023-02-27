import React, { useState } from 'react';
import './Login.css';
import LinkedinLogo from './../../Assets/Linkedin-Logo.png'
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { loginuser } from '../../features/userSlice';

const Login = () => {
    const [singup, setSignup] = useState(false);

    const [name, setName] = useState("");
    const [PhotoUrl, setPhotUrl] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();

        if (!name) {
            return alert("Name is required.")
        }
        if (!PhotoUrl) {
            return alert("PhotoUrl is required.")
        }
        if (!email) {
            return alert("email is required.")
        }
        if (!password) {
            return alert("password is required.")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: PhotoUrl,
            }).then(() => {
                dispatch(loginuser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL: PhotoUrl,
                    displayName: name,
                }))
            })
        }).catch(error => alert(error));

        setName("");
        setPhotUrl("");
        setEmail("");
        setPassword("");
    }

    const signIn = (e) => {
        e.preventDefault();
        if (!email) {
            return alert("email is required.")
        }
        if (!password) {
            return alert("password is required.")
        }

        auth.signInWithEmailAndPassword(email, password).then(({ user }) => {
            dispatch(loginuser({
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName,
            }))
        }).then(error => alert(error))

    }



    return (
        <div className="loginScreen">
            <img src={LinkedinLogo} />
            {singup === true ? (

                <form onSubmit={register}>
                    <input type="text" placeholder="Full Name (Required if registered)" value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder="Profile picture Url" value={PhotoUrl} onChange={e => setPhotUrl(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value='Sign Up' />

                    <h4>Already a member ? <span onClick={e => setSignup(false)}>Login Here</span></h4>
                </form>
            ) : (
                <form onSubmit={signIn}>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value='Sign In' />

                    <h4>Not a member ? <span onClick={e => setSignup(true)}>Register Here</span></h4>
                </form>
            )}



        </div>
    )
}

export default Login
