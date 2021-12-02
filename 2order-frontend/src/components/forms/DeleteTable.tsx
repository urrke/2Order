import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useActions } from '../../hooks/useActions';
import { useStyles } from '../../formSettings';
import { useNotifications } from '../../hooks/useNotifications';

interface ChildProps {
  isOpen: boolean;
  closeModal: () => void;
  idStola: number;
}

const DeleteTable: React.FC<ChildProps> = ({ isOpen, closeModal, idStola }) => {
    const classes = useStyles();
    const { obrisiSto } = useActions();
    const [showMessage] = useNotifications();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      obrisiSto(idStola);
      closeModal();
      showMessage(`You deleted the table!`, 'success');
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
                        <div className="modal-body">
                          <p>Do You want to delete this table?</p>
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

export default DeleteTable;