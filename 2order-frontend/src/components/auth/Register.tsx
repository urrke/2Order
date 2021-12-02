import { Backdrop, Fade, Modal } from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "../../formSettings";
import { useActions } from "../../hooks/useActions";
import { useNotifications } from "../../hooks/useNotifications";
import Korisnik from "../../model/Korisnik";

interface ChildProps {
    isOpen: boolean;
    closeModal: () => void;
}

const Register: React.FC<ChildProps> = ({isOpen, closeModal}) => {
    const classes = useStyles();
    const { dodajKorisnika } = useActions();
    const [showMessage] = useNotifications();
    const [ime, setIme] = useState<string>('');
    const [prezime, setPrezime] = useState<string>('');
    const [adresa, setAdresa] = useState<string>('');
    const [grad, setGrad] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [brojTel, setBrojTel] = useState<string>('');
    const [sifra, setSifra] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        var user = { 
            ime, 
            prezime, 
            email, 
            sifra, 
            grad, 
            adresa, 
            brojTelefona: brojTel,
            tip: "Korisnik" 
        } as Korisnik;
        e.preventDefault();
        closeModal();
        dodajKorisnika(user);
        showMessage("You registered successfully!", 'success');
    }
    
    return (
        <Modal
            className={classes.modal}
            open={isOpen}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500
            }}
        >
            <Fade in={isOpen}>
                <div className={classes.paper}>
                    <form onSubmit={onSubmit}>
                        <div className="register-container">
                            <div className="register-field">
                                <div className="login-text">
                                    <h5>Enter your informations</h5>
                                </div>
                                <div className="login-info">
                                    <input 
                                        placeholder="First name"
                                        className="login-input"
                                        type="text"
                                        value={ime} 
                                        onChange={(e) => setIme(e.currentTarget.value)}
                                        required
                                    />
                                    
                                    <input 
                                        placeholder="Last name" 
                                        className="login-input" 
                                        type="text"
                                        value={prezime} 
                                        onChange={(e) => setPrezime(e.currentTarget.value)}
                                        required
                                    />
                                    <input 
                                        placeholder="Email" 
                                        className="login-input" 
                                        type="text"
                                        value={email} 
                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                        pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
                                        required
                                    />
                                    <input 
                                        placeholder="Password" 
                                        className="login-input" 
                                        type="password"
                                        value={sifra} 
                                        onChange={(e) => setSifra(e.currentTarget.value)} 
                                        required
                                    />
                                    <input 
                                        placeholder="City" 
                                        className="login-input" 
                                        type="text"
                                        value={grad} 
                                        onChange={(e) => setGrad(e.currentTarget.value)}
                                        required
                                    />
                                    <input 
                                        placeholder="Address" 
                                        className="login-input" 
                                        type="text"
                                        value={adresa} 
                                        onChange={(e) => setAdresa(e.currentTarget.value)}
                                        required
                                    />  
                                    <input 
                                        placeholder="Phone number" 
                                        className="login-input" 
                                        type="text"
                                        value={brojTel}
                                        onChange={(e) => setBrojTel(e.currentTarget.value)}
                                        required
                                    /> 
                                </div>
                                <div className="register-options">
                                    <button className="cancel-register-button" onClick={closeModal}>Cancel</button>
                                    <button className="register-button">Register</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        </Modal>
    )
}

export default Register;