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
    const [ showMessage ] = useNotifications();
    const { connection } = useTypedSelector((state)=>state.signalR);
    const { idStola } = useTypedSelector(state => state.trenutniRacun);

    const onDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onDeleteItemFromOrder();
        showMessage(`You deleted ${stavka.naziv} from Your order!`, 'error');
    }

    //on funkcija u currentOrder
    const onDeleteItemFromOrder = () => {
        var stoId = idStola ? idStola : 0;
        connection && connection.invoke("IzbaciStavkuIzPorudzbine", stavka.id, stoId);
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