import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useActions } from '../../hooks/useActions';
import { useEffect, useState } from 'react';
import StavkaMenija from '../../model/StavkaMenija';

interface ChildProps {
    isOpen: boolean;
    closeModal: () => void;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const NewItem: React.FC<ChildProps> = ({isOpen, closeModal, handleSubmit}) => {
    const classes = useStyles();
    const { dodajStavkuMenija } = useActions();
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [group, setGroup] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    useEffect(() => {
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        var item = { naziv: name, tip: type, grupa: group, cena: parseInt(price) } as StavkaMenija;
        e.preventDefault();
        closeModal();
        dodajStavkuMenija(item);
    }

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setType(event.currentTarget.value);
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
                                    <h5>Add new item</h5>
                                </div>
                                <div className="login-info">
                                    <input 
                                        placeholder="Name" 
                                        onChange={(e) => setName(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                    />
                                    <select onChange={onChange} className="login-input">
                                        <option key="0" value="0">Choose option</option>
                                        <option key="1" value="Hrana">Hrana</option>
                                        <option key="2" value="Pice">Pice</option>
                                    </select>
                                    <input 
                                        placeholder="Group" 
                                        onChange={(e) => setGroup(e.currentTarget.value)} 
                                        className="login-input" 
                                        type="text" 
                                    />
                                    <input 
                                        placeholder="Price" 
                                        onChange={(e) => setPrice(e.currentTarget.value)} 
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

export default NewItem;