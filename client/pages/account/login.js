import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from "react";
import Layout from "@/components/Layout";
import styles from '../../styles/AuthForm.module.css';
import Link from 'next/link';
import AuthContext from "@/context/AuthContext";




const LoginPage = () => {
    const { login, error } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password });

    }

    return (
        <Layout title="Login Page">
            <div className={styles.auth}>
                <h1><FaUser /> Log In</h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
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
                    <input type="submit" value="login" className="btn" />
                </form>
                <p>Don׳t have an account? <Link href="/account/register" >Register</Link></p>
            </div>
        </Layout >
    )
}

export default LoginPage;
