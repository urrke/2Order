import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import StavkaMenija from "../../model/StavkaMenija";
import AddItem from "./../forms/AddItem";

interface ChildProps {
    stavka: StavkaMenija;
}

const Drink: React.FC<ChildProps> = ({stavka}) => {
    const [open, setOpen] = useState<boolean>(false);
    const { data } = useTypedSelector((state)=>state.auth);

    const closeModal = () => {
        setOpen(false);
    }

    return(
        <div>
            <div className="row menu-item">
                <div className="col-3 p-0 position-relative">
                    <img src="../images/menu1.jpg" className="drink-meal-image" alt="" />
                    { (data !== null && data.korisnik.tip == "Korisnik") &&
                    <button onClick={(e)=>setOpen(true)} className="btn button-style button-style-2" style={{marginLeft:"35%"}}>Add</button> }
                </div>
                <div className="col-9 pl-4">
                    <div className="row no-gutters">
                        <div className="col-9 menu-item-name">
                            <h6>{stavka.naziv}</h6>
                        </div>
                        <div className="col-3 menu-item-price text-right">
                            <h6>{stavka.cena.toFixed(2)}din</h6>
                        </div>
                    </div>
                    <div className="menu-item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur tredjh adipiscing elit.</p>
                    </div>
                </div>
            </div>
            {open && <AddItem isOpen={open} closeModal={closeModal} stavka={stavka}/>}
        </div>
    )
}

export default Drink;