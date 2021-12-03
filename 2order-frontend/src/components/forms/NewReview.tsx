import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useActions } from '../../hooks/useActions';
import { useState } from 'react';
import Recenzija from '../../model/Recenzija';

interface ChildProps {
    isOpen: boolean;
    closeModal: () => void;
    racunId: number;
}

const NewReview: React.FC<ChildProps> = ({isOpen, closeModal, racunId}) => {
    const classes = useStyles();
    const { dodajRecenziju } = useActions();
    const [ocena, setOcena] = useState<number>();
    const [komentar, setKomentar] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        var recenzija = { 
            id: 0,
            komentar,
            ocena,
            racunId,
            vreme: new Date()
        } as Recenzija;
        e.preventDefault();
        closeModal();
        dodajRecenziju(recenzija);
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
                                    <h5>Add new review</h5>
                                </div>
                                <div className="login-info">
                                    <input 
                                        placeholder="Rating" 
                                        value={ocena}
                                        onChange={(e) => setOcena(e.currentTarget.valueAsNumber)} 
                                        className="login-input" 
                                        type="number"
                                        min={1}
                                        max={10} 
                                    />
                                    <input 
                                        placeholder="Comment" 
                                        value={komentar}
                                        onChange={(e) => setKomentar(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                    />
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

export default NewReview;