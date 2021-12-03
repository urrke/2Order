import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../app.config.json'
import Recenzija from '../../model/Recenzija';

interface ChildProps {
    isOpen: boolean;
    closeModal: () => void;
    recenzijaId: number;
}

const ReviewDetails: React.FC<ChildProps> = ({isOpen, closeModal, recenzijaId}) => {
    const classes = useStyles();
    const [recenzija, setRecenzija] = useState<Recenzija>();

    useEffect(() => {
        nadjiRecenziju(recenzijaId);
    }, []);

    const nadjiRecenziju = (id: number) => {
        axios.get(`${config.server}/Recenzija/vratiRecenziju/${id}`).then(res => {
            setRecenzija(res.data);
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeModal();
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
                    <h3 className="modal-title">Review details</h3>
                    <form onSubmit={onSubmit}>
                        <div className="register-container">
                        {(recenzija && recenzija.racun) &&
                                <div className="login-info">
                                <div className="detail">
                                    <label className="detail-label">Table</label>
                                    <input 
                                        className="login-input"
                                        type="text"
                                        value={recenzija.racun.sto?.oznaka} 
                                        disabled
                                    />
                                </div>
                                <div className="detail">
                                    <label className="detail-label">Waiter</label>
                                    <input 
                                        className="login-input" 
                                        type="text"
                                        value={recenzija.racun.sto?.konobar.ime + ' ' + recenzija.racun.sto?.konobar.prezime} 
                                        disabled
                                    />
                                </div>
                                <div className="detail">
                                    <label className="detail-label">Date</label>
                                    <input 
                                        className="login-input"
                                        type="text"
                                        value={recenzija.racun.vreme.toString().replace('T', ' ')} 
                                        disabled
                                    />
                                </div>
                                <div className="detail">
                                    <label className="detail-label">Total</label>
                                    <input 
                                        className="login-input" 
                                        type="text"
                                        value={parseInt(recenzija.racun.iznos).toFixed(2) + 'din'} 
                                        disabled
                                    />
                                </div>
                            </div>
                            }
                            <div className="details-buttons">
                                <button className="detail-button">Ok</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        </Modal>
    )
}

export default ReviewDetails;