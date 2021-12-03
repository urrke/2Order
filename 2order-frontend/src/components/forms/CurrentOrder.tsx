import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from '../../formSettings';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import StavkaMenija from '../../model/StavkaMenija';
import OrderItem from './OrderItem';
import { useState, useEffect } from 'react';
import { useCheckDuplicate } from '../../hooks/useCheckDuplicate';
import { useActions } from '../../hooks/useActions';
import Racun from '../../model/Racun';

interface ChildProps {
  isOpen: boolean;
  closeModal: () => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

interface StavkaIBrojPonavljanja {
    stavka: StavkaMenija;
    broj: number;
}

const CurrentOrder: React.FC<ChildProps> = ({ isOpen, closeModal, handleSubmit }) => {
    const classes = useStyles();
    const [ukupnaSuma, setUkupnaSuma] = useState<number>(0);
    const { obrisiStavkuIzRacuna, dodajRacun } = useActions();
    const [racun, setRacun] = useState<StavkaIBrojPonavljanja[]>([]);
    const { stavke, nazivStola, imeKonobara, idStola, porudzbine } = useTypedSelector((state)=>state.trenutniRacun);
    const { data } = useTypedSelector((state)=>state.auth);
    const { connection } = useTypedSelector((state)=>state.signalR);
    const [checkDuplicate] = useCheckDuplicate();

    useEffect(() => {
        var suma = 0;
        stavke.map((stavka: StavkaMenija) => {
            suma = suma + stavka.cena;
        });
        setUkupnaSuma(suma);
        setRacun(checkDuplicate(stavke));
    }, []);

    useEffect(()=> {
        connection && connection.on("deleteFromOrder", stavkaId => 
        {
            obrisiStavkuIzRacuna(stavkaId);
            handleDelete();
            var suma = 0;
            stavke.map((stavka: StavkaMenija) => {
                suma = suma + stavka.cena;
            });
            setUkupnaSuma(suma);
        });
        return () => {
            connection && connection.off("deleteFromOrder");
        }
    }, []);

    const createOrder = () => {
        if(idStola !== null && idStola !== 0)
        {
            const r: Racun = {
                id: 0,
                iznos: ukupnaSuma.toString(),
                stoId: idStola,
                vreme: new Date(),
                listaPorudzbina: porudzbine,
            }
            dodajRacun(r);
        }
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createOrder();
        closeModal();
    }

    const handleDelete = () => {
        setRacun(checkDuplicate(stavke));
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
                    <h3 className="modal-title">Your order</h3>
                    <p>Table {nazivStola ? nazivStola : '/'}, Waiter {imeKonobara ? imeKonobara : '/'}</p>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body current-order">
                            {racun.length > 0 && 
                                racun.map((obj: StavkaIBrojPonavljanja) => 
                                    <OrderItem 
                                        key={obj.stavka.id} 
                                        stavka={obj.stavka} 
                                        broj={obj.broj} 
                                        setUkupnaSuma={setUkupnaSuma} 
                                        handleDelete={handleDelete}
                                    />
                            )}
                            <div className='current-priceSum'>
                                {<p>Total: {ukupnaSuma.toFixed(2)}din</p>}
                            </div>
                        </div>
                        <div className="modal-buttons">
                            <button type="submit" className="modal-submit">
                                Send
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

export default CurrentOrder;