import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useActions } from '../../hooks/useActions';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Sto from '../../model/Sto';
import Korisnik from '../../model/Korisnik';

interface ChildProps {
    isOpen: boolean;
    closeModal: () => void;
}

const NewTable: React.FC<ChildProps> = ({isOpen, closeModal}) => {
    const classes = useStyles();
    const { dodajSto, vratiKorisnikePoTipu } = useActions();
    const [name, setName] = useState<string>('');
    const [numOfSeats, setNumOfSeats] = useState<string>('');
    const { korisnici } = useTypedSelector(state => state.korisnici);
    const [waiter, setWaiter] = useState<string>('');

    useEffect(() => {
        vratiKorisnikePoTipu("Radnik");
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        var table = { 
            oznaka: name, 
            brojMesta: parseInt(numOfSeats), 
            slobodan: true, 
            konobarId: parseInt(waiter), 
            x: 10, 
            y: 10 
        } as Sto;
        e.preventDefault();
        closeModal();
        dodajSto(table);
    }

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setWaiter(event.currentTarget.value);
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
                                    <h5>Add new table</h5>
                                </div>
                                <div className="login-info">
                                    <input 
                                        placeholder="Name" 
                                        onChange={(e) => setName(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                    />
                                    <input 
                                        placeholder="Num of seats" 
                                        onChange={(e) => setNumOfSeats(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                    />
                                    <select className="login-input" onChange={onChange}>
                                        <option value="0">Choose waiter</option>
                                        {korisnici.map((k: Korisnik) => <option key={k.id} value={k.id}>{k.ime} {k.prezime}</option>)}
                                    </select>
                                </div>
                                <div className="new-form-options">
                                    <button className="cancel-new-form-button" onClick={closeModal}>Cancel</button>
                                    <button className="new-form-button">Add</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        </Modal>
    )
}

export default NewTable;