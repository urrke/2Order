import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useEffect, useState } from 'react';
import Racun from '../../model/Racun';
import axios from 'axios';
import config from '../../app.config.json'

interface ChildProps {
    isOpen: boolean;
    closeModal: () => void;
    racunId: number;
}

const BillDetails: React.FC<ChildProps> = ({isOpen, closeModal, racunId}) => {
    const classes = useStyles();
    const [racun, setRacun] = useState<Racun>();

    useEffect(() => {
        nadjiRacun(racunId);
    }, []);

    const nadjiRacun = (id: number) => {
        axios.get(`${config.server}/Racun/vratiRacun/${id}`).then(res => {
            setRacun(res.data);
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
                    <h3 className="modal-title">Bill details</h3>
                    <form onSubmit={onSubmit}>
                        <div className="register-container">
                            {racun &&
                                <div className="login-info">
                                    <div className="detail">
                                        <label className="detail-label">Table</label>
                                        <input 
                                            className="login-input"
                                            type="text"
                                            value={racun.sto?.oznaka} 
                                            disabled
                                        />
                                    </div>
                                    <div className="detail">
                                        <label className="detail-label">Waiter</label>
                                        <input 
                                            className="login-input" 
                                            type="text"
                                            value={racun.sto?.konobar.ime + ' ' + racun.sto?.konobar.prezime} 
                                            disabled
                                        />
                                    </div>
                                    <div className="detail">
                                        <label className="detail-label">Date</label>
                                        <input 
                                            className="login-input"
                                            type="text"
                                            value={racun.vreme.toString().replace('T', ' ')} 
                                            disabled
                                        />
                                    </div>
                                    <div className="detail">
                                        <label className="detail-label">Total</label>
                                        <input 
                                            className="login-input" 
                                            type="text"
                                            value={parseInt(racun.iznos).toFixed(2) + 'din'} 
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

export default BillDetails;