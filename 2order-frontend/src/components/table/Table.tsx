import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import $ from "jquery";
import DeleteTable from "../forms/DeleteTable";
import { useActions } from "../../hooks/useActions";
import Sto from "../../model/Sto";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNotifications } from "../../hooks/useNotifications";
import TakeTable from "../forms/TakeTable";
import JoinTable from "../forms/JoinTable";

interface ChildProps {
    sto: Sto;
    enable: any;
}

const Table: React.FC<ChildProps> = ({enable, sto}) => {
    const { azurirajPozicijuStola, zauzmiIliOslobodiSto, postaviTrenutniSto } = useActions();
    const { idStola, nazivStola } = useTypedSelector((state)=>state.trenutniRacun);
    const { data } = useTypedSelector((state) => state.auth);
    const { connection } = useTypedSelector(state => state.signalR);
    const [open, setOpen] = useState<boolean>(false);
    const [openTake, setOpenTake] = useState<boolean>(false);
    const [openJoin, setOpenJoin] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [showMessage] = useNotifications();

    useEffect(() => {
        const child: JQuery<HTMLElement> = $('.t'+sto.id.toString());
        child.parent().css({position: 'relative'});
        child.css({top: sto.y, left: sto.x, position:'absolute'});
    }, [])

    const handleDrag = () => {
        const child: JQuery<HTMLElement> = $('.t'+sto.id.toString());
        if(child)
            azurirajPozicijuStola(sto.id, child.position().left, child.position().top);
    };

    const deleteTable = () => {
        setOpen(true);
    }

    const takeTable = () => {
        setOpenTake(true);
    }

    const closeModal = () => {
        if(openTake)
            setOpenTake(false);
        else if (openJoin)
            setOpenJoin(false);
        else 
            setOpen(false);
    }

    const createRandom = () => {
        var randomstring = require("randomstring");
        var random = randomstring.generate();
        setPassword(random);
    }

    const handleSubmit = () => {
        zauzmiIliOslobodiSto(sto.id, password);
        postaviTrenutniSto(sto.id, sto.oznaka, sto.konobar.ime);
        showMessage("You took the table!", 'success');
        var ime = data ? data.korisnik.ime : '';
        connection && connection.invoke("DodajKorisnikaZaSto", sto.id, ime);
    }

    const onJoin = () => {
        setOpenJoin(true);
    }

    const onTake = () => {
        createRandom();
        if(idStola === null && sto.slobodan === true) {
            takeTable();
        }
        else if(idStola !== null && sto.slobodan === false && sto.id === idStola) {
            zauzmiIliOslobodiSto(sto.id, '');
            postaviTrenutniSto(null,null,null);
            showMessage("You left the table!", 'success');
            var ime = data ? data.korisnik.ime : '';
            connection && connection.invoke("IzbaciKorisnikaSaStola", sto.id, ime);
        }
        else if(idStola === null && sto.slobodan === false) {
            showMessage(`You did not took this table.`, "warning")
        }
        else {
            showMessage(`You took the table ${nazivStola}.`, "warning")
        }
    }

    return (
        <>
        <Draggable grid={[50, 100]} bounds="parent" onStart={() => enable} onStop={handleDrag} >
            <div className={"t"+sto.id}>
                <div 
                    className={sto.slobodan ? enable === false ? "table-box" : "table-box-moving" : "table-box-taken"} 
                    style={{width: `${(100*sto.brojMesta)/2}px`, height: '100px'}}
                >
                    <div className="x-button-wrap">
                        { enable !== false && <label className="x-button" onClick={deleteTable}>X</label> }
                    </div>
                    <p className="table-title">{sto.oznaka} / {sto.brojMesta}</p>
                    { data?.korisnik.tip !== "Radnik" && enable === false && 
                        <div className="table-button-wrap">
                            <button className="table-button" onClick={onTake}>{sto.slobodan ? 'Take' : 'Untake'}</button>
                            {!sto.slobodan && <button className="table-button" onClick={onJoin}>Join</button>}
                        </div> 
                    }
                </div>
            </div>
        </Draggable>
        {open && <DeleteTable isOpen={open} closeModal={closeModal} idStola={sto.id}/>}
        {openTake && <TakeTable isOpen={openTake} closeModal={closeModal} password={password} handleSubmit={handleSubmit}/>}
        {openJoin && <JoinTable isOpen={openJoin} closeModal={closeModal} idStola={sto.id} />}
        </>
    )
}

export default Table;