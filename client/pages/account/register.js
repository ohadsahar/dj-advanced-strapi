import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from "react";
import Layout from "@/components/Layout";
import styles from '../../styles/AuthForm.module.css';
import Link from 'next/link';
import AuthContext from "@/context/AuthContext";



const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState('');
    const { register, error } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirmed) {
            toast.error('Password are diffrenet!');
        } else {
            register({ username, password, email })
        }

    }


    return (
        <Layout title="Register Page">
            <div className={styles.auth}>
                <h1><FaUser /> Log In</h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="passwordConfirmed">Password Confirmed</label>
                        <input type="password"
                            id="passwordConfirmed"
                            value={passwordConfirmed}
                            onChange={(e) => setPasswordConfirmed(e.target.value)}></input>
                    </div>
                    <input type="submit" value="login" className="btn" />
                </form>
                <p>Already have an account? <Link href="/account/login" >Login</Link></p>
            </div>
        </Layout >
    )
}

export default RegisterPage;
