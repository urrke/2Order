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
  price?: number;
  description?: string;
}

const AddItem: React.FC<ChildProps> = ({ isOpen, closeModal, stavka, price, description }) => {
    const classes = useStyles();
    const [showMessage] = useNotifications();
    const { connection } = useTypedSelector(state => state.signalR);
    const { idStola } = useTypedSelector(state => state.trenutniRacun);
    const { data } = useTypedSelector(state => state.auth);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const finalOrder = new StavkaMenija(stavka);
        finalOrder.cena = price ? price : stavka.cena;
        finalOrder.naziv = description ? description : stavka.naziv;
        e.preventDefault();
        onAddItemToOrder(finalOrder);
        closeModal();
      //showMessage(`You added ${stavka.naziv} to Your order!`, 'success');
    }

    //on funkcija u menu
    const onAddItemToOrder = (order: StavkaMenija) => {
        var ime: string = data ? data.korisnik.ime : '';
        var idKorisnika: number = data ? data.korisnik.id : 0;
        var stoId = idStola ? idStola : 0;
        connection && connection.invoke("DodajStavkuUPorudzbinu", order, stoId, ime, idKorisnika);
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
                        <p>Do You want to add {description || stavka.naziv} to Your order?</p>
                        </div>
                        <div className="modal-body">
                          <p>Total price: {price || stavka.cena}</p>
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