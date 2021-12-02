import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useEffect } from 'react';

interface ChildProps {
    isOpen: boolean;
    closeModal: () => void;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const BillDetails: React.FC<ChildProps> = ({isOpen, closeModal, handleSubmit}) => {
    const classes = useStyles();

    useEffect(() => {
    }, []);

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
                        <div className="modal-body">
                           
                        </div>
                        <div className="modal-buttons">
                            <button type="submit" className="modal-submit">
                                Ok
                            </button>
                            <button type="button" className="modal-cancel" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </Fade>
        </Modal>
    )
}

export default BillDetails;