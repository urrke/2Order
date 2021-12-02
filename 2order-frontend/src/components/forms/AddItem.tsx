import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import StavkaMenija from '../../model/StavkaMenija';
import { useNotifications } from '../../hooks/useNotifications';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ChildProps {
  isOpen: boolean;
  closeModal: () => void;
  stavka: StavkaMenija;
}

const AddItem: React.FC<ChildProps> = ({ isOpen, closeModal, stavka }) => {
    const classes = useStyles();
    const [showMessage] = useNotifications();
    const { connection } = useTypedSelector(state => state.signalR);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAddItemToOrder();
      closeModal();
      showMessage(`You added ${stavka.naziv} to Your order!`, 'success');
    }

    //on funkcija u index
    const onAddItemToOrder = () => {
        connection && connection.invoke("DodajStavkuUPorudzbinu", stavka, 1);
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
                          <p>Do You want to add {stavka.naziv} to Your order?</p>
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

export default AddItem;