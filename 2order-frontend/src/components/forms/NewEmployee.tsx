import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useActions } from '../../hooks/useActions';
import { useEffect, useState } from 'react';
import Korisnik from '../../model/Korisnik';

interface ChildProps {
    isOpen: boolean;
    closeModal: () => void;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const NewEmployee: React.FC<ChildProps> = ({isOpen, closeModal, handleSubmit}) => {
    const classes = useStyles();
    const { dodajKorisnika } = useActions();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');


    useEffect(() => {
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        var employee = { 
            ime: firstName, 
            prezime: lastName, 
            email: email, 
            sifra: password, 
            grad: city, 
            adresa: address, 
            brojTelefona: phone, 
            tip: "Radnik" 
        } as Korisnik;
        e.preventDefault();
        closeModal();
        dodajKorisnika(employee);
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
                        <div className="new-form-container">
                            <div className="new-form-field">
                                <div className="login-text">
                                    <h5>Add new employee</h5>
                                </div>
                                <div className="login-info">
                                    <input 
                                        placeholder="First name" 
                                        onChange={(e) => setFirstName(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                        required
                                    />
                                    <input 
                                        placeholder="Last name" 
                                        onChange={(e) => setLastName(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                        required
                                    />
                                    <input 
                                        placeholder="Email" 
                                        onChange={(e) => setEmail(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                        pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
                                        required
                                    />
                                    <input 
                                        placeholder="Password" 
                                        onChange={(e) => setPassword(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="password" 
                                        required
                                    />
                                    <input 
                                        placeholder="City" 
                                        onChange={(e) => setCity(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                        required
                                    />
                                    <input 
                                        placeholder="Address" 
                                        onChange={(e) => setAddress(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                        required
                                    />
                                    <input 
                                        placeholder="Phone number" 
                                        onChange={(e) => setPhone(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                        required
                                    />
                                </div>
                                <div className="new-form-options">
                                    <button className="cancel-new-form-button" onClick={closeModal}>Cancel</button>
                                    <button type="submit" className="new-form-button">Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        </Modal>
    )
}

export default NewEmployee;