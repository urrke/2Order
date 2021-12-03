import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import StavkaMenija, { IStavkaMenija, KetchupDecorator, MayonnaiseDecorator } from "../../model/StavkaMenija";
import AddItem from "./../forms/AddItem";

interface ChildProps {
    stavka: StavkaMenija;
}

const Meal: React.FC<ChildProps> = ({stavka}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [ketchup, setKetchup] = useState<boolean>(false);
    const [mayonnaise, setMayonnaise] = useState<boolean>(false);
    const { data } = useTypedSelector((state)=>state.auth);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>('');

    const closeModal = () => {
        setOpen(false);
    }

    const handleOpening = () => {
        let stavkaSaPrilozima: IStavkaMenija = new StavkaMenija(stavka);
        
        if(ketchup)
            stavkaSaPrilozima = new KetchupDecorator(stavkaSaPrilozima);
            
        if(mayonnaise)
            stavkaSaPrilozima = new MayonnaiseDecorator(stavkaSaPrilozima);

        setTotalPrice(stavkaSaPrilozima.getPrice());
        setDescription(stavkaSaPrilozima.getDescription());
        setOpen(true);
    }

    return(
        <div>
            <div className="row menu-item">
                <div className="col-3 p-0 position-relative">
                    <img src="../images/menu1.jpg" className="drink-meal-image" alt="" />
                    { (data !== null && data.korisnik.tip == "Korisnik") && 
                    <button onClick={handleOpening} className="btn button-style button-style-2" style={{marginLeft:"35%"}}>Add</button> }
                </div>
                <div className="col-9 pl-4">
                    <div className="row no-gutters">
                        <div className="col-9 menu-item-name">
                            <h6>{stavka.naziv}</h6>
                        </div>
                        <div className="col-3 menu-item-price text-right flex-row">
                            <h6>{stavka.cena.toFixed(2)}din</h6>
                                     
                            <label> <input type="checkbox" onClick={(e) => setKetchup(e.currentTarget.checked)}/> +40 Ketchup </label>
                            <label> <input type="checkbox" onClick={(e) => setMayonnaise(e.currentTarget.checked)}/> +60 Mayonnaise </label>
                        </div>
                    </div>
                    <div className="menu-item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur tredjh adipiscing elit.</p>
                    </div>
                </div>

            </div>
            {open && <AddItem isOpen={open} closeModal={closeModal} stavka={stavka} price={totalPrice} description={description} />}
        </div>
    )
}

export default Meal;