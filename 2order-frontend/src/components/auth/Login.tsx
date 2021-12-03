import { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Register from "./Register";

const Login: React.FC = () => {
    const [open, setOpen] = useState<boolean>();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { prijava } = useActions();
    const { error } = useTypedSelector(state => state.auth);

    const closeModal = () => {
        setOpen(false);
    }

    const onLogin = () => {
        prijava(email, password);
    }

    return (
        <div className="login-container">
            <div className="login-field">
                <div className="login-text">
                    <h2>Welcome</h2>
                    <h6>Enter your login informations</h6>
                </div>
                <div className="login-info">
                    <input 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.currentTarget.value)} 
                        className="login-input" 
                        type="text" 
                    />
                    <input 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.currentTarget.value)} 
                        className="login-input" 
                        type="password" 
                    />
                    {error && <p style={{color: "red"}}>Email or password are incorrect!</p>}
                </div>
                <div className="login-options">
                    <button className="login-button" onClick={onLogin}>Log In</button>
                    <div className="login-line">
                        <div className="line"></div>
                        <p>or</p>
                        <div className="line"></div>
                    </div>
                    <button className="login-register-button" onClick={() => setOpen(true)}>Register</button>
                </div>
                <div className="login-guest">
                <p>If you do not want to create an account</p>
                <Link to="/home"><button className="login-guest-button">Continue as guest</button></Link>
                </div>
            </div>
            {open && <Register isOpen={open} closeModal={closeModal} />}
        </div>
    )
}

export default Login;