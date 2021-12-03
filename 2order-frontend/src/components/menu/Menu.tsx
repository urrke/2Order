import { useEffect } from "react";
import Navigator from "./../layout/Navigator";
import { faHamburger, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Food from "./Food";
import Drinks from './Drinks'
import { useState } from "react";
import Footer from "./../layout/Footer";
import Header from "./../layout/Header";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNotifications } from "../../hooks/useNotifications";
import StavkaMenija from "../../model/StavkaMenija";

const Menu: React.FC = () => {
    const { dodajStavkuURacun, dodajPorudzbinuURacun } = useActions();
    const { connection } = useTypedSelector(state => state.signalR);
    const [show, setShow] = useState<string | null>(null);
    const [showMessage] = useNotifications();
    
    useEffect(()=>{
        window.scrollTo(0, 0);
        connection && connection.on("addToOrder", (stavka, ime, idKorisnika) => 
        {
            dodajStavkuURacun(stavka);
            dodajPorudzbinuURacun(stavka, idKorisnika)
            showMessage(`${ime} has added ${stavka.naziv} to the order`, 'info');
        });
        return () => {
            connection && connection.off("addToOrder");
        }
    }, []);

    const onChange = (e: React.MouseEvent<HTMLButtonElement>, tip: string) => {
        e.preventDefault();
        setShow(tip);
    }

    return (
        <div>
            <Header />
            <Navigator from={'Home'} to={'Menu'} path={'/home'}/>
            <div className='menu-container'>
                <div>
                    <button className="btn button-style" onClick={(e) => onChange(e,'food')} style={{marginRight:'10px'}}>
                        <FontAwesomeIcon icon={faHamburger}/> Food
                    </button>
                    <button className="btn button-style" onClick={(e) => onChange(e,'drinks')}>
                        <FontAwesomeIcon icon={faCoffee}/> Drinks
                    </button>
                </div>
                <div>
                    {show!==null && (show === 'drinks' ? <Drinks/> : <Food/>)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu;