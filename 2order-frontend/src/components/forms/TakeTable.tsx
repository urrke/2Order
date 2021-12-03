import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';

interface ChildProps {
  isOpen: boolean;
  closeModal: () => void;
  password: string;
  handleSubmit: () => void;
}

const TakeTable: React.FC<ChildProps> = ({ isOpen, closeModal, password, handleSubmit }) => {
    const classes = useStyles();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        handleSubmit();
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
                    <form onSubmit={onSubmit}>
                        <h5>You want to take this table?</h5>
                        <div className="modal-body">
                            <div className="take-table-container">
                                <p className="take-table-info">Your password is <b>{password}</b>.</p>
                                <p className="take-table-info">You can share it with Your friends.</p>
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

export default TakeTable;