import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import config from '../../app.config.json'
import axios from 'axios';
import Sto from '../../model/Sto';
import { useNotifications } from '../../hooks/useNotifications';
import { useActions } from '../../hooks/useActions';

interface ChildProps {
  isOpen: boolean;
  closeModal: () => void;
  idStola: number;
}

const JoinTable: React.FC<ChildProps> = ({ isOpen, closeModal, idStola }) => {
    const classes = useStyles();
    const [password, setPassword] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const { postaviTrenutniSto } = useActions();
    const [ showMessage ] = useNotifications();
    const { data } = useTypedSelector((state) => state.auth);
    const { connection } = useTypedSelector(state => state.signalR);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        onAddUserToTable();
        e.preventDefault();
    }

    const onAddUserToTable = () => {
        axios.get(`${config.server}/Sto/vratiSto/${idStola}`).then(res => {
            var sto = res.data as Sto;
            if(sto.slobodan === false && sto.sifra === password) {
                setSuccess(true);
                var ime = data ? data.korisnik.ime : '';
                postaviTrenutniSto(sto.id, sto.oznaka, sto.konobar.ime);
                connection && connection.invoke("DodajKorisnikaZaSto", idStola, ime);
                showMessage("You joined the table!", 'success');
                closeModal();
            }
            else {
                setSuccess(false);
            }
        })
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
                        <h5>You want to join this table?</h5>
                        <div className="modal-body">
                            <div className="take-table-container">
                                <p className="take-table-info">Please enter the password.</p>
                                <input className="join-input" type="text" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                                {!success && <p style={{color:"red"}}>Wrong password!</p>}
                            </div>
                        </div>
                        <button type="submit" className="modal-submit">
                            Submit
                        </button>
                        <button type="button" className="modal-cancel" onClick={closeModal}>
                            Cancel
                        </button>
                    </form>
                </div>
            </Fade>
        </Modal>
    )
}

export default JoinTable;