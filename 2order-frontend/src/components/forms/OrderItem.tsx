import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useNotifications } from "../../hooks/useNotifications";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import StavkaMenija from "../../model/StavkaMenija";

interface ChildProps {
    stavka: StavkaMenija;
    broj: number;
    setUkupnaSuma: React.Dispatch<React.SetStateAction<number>>;
    handleDelete: () => void;
}

const OrderItem: React.FC<ChildProps> = ({ stavka, broj, setUkupnaSuma, handleDelete }) => {
    const { obrisiStavkuIzRacuna } = useActions();
    const [ showMessage ] = useNotifications();
    const { stavke } = useTypedSelector((state)=>state.trenutniRacun);
    const { connection } = useTypedSelector((state)=>state.signalR);

    useEffect(() => {
        /*connection && connection.on("deleteFromOrder", stavkaId => 
        {
            obrisiStavkuIzRacuna(stavkaId);
            handleDelete();
            var suma = 0;
            trenutniRacun.map((stavka: StavkaMenija) => {
                suma = suma + stavka.cena;
            });
            setUkupnaSuma(suma);
            
        });
        return function cleanup() {
            connection && connection.off("deleteFromOrder");
        };*/
    }, [])

    const onDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onDeleteItemFromOrder();
        //obrisiStavkuIzRacuna(stavka.id);
        /*handleDelete();
        var suma = 0;
        trenutniRacun.map((stavka: StavkaMenija) => {
            suma = suma + stavka.cena;
        });
        setUkupnaSuma(suma);*/
        showMessage(`You deleted ${stavka.naziv} from Your order!`, 'error');
    }

    //on funkcija u currentOrder
    const onDeleteItemFromOrder = () => {
        connection && connection.invoke("IzbaciStavkuIzPorudzbine", stavka.id, 1);
    }

    return (
        <div className='order-item-row'>
            <div className='order-item-name-price'>
                <div className='order-item-name'>
                    {stavka.naziv} x {broj}
                </div>
                <div className='order-item-price'>
                    {(stavka.cena * broj).toFixed(2)}din
                </div>
            </div>
            <div className='order-item-delete'>
                <button className='order-item-button' onClick={onDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default OrderItem;