import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import $ from "jquery";
import DeleteTable from "../forms/DeleteTable";
import { useActions } from "../../hooks/useActions";
import Sto from "../../model/Sto";

interface ChildProps {
    sto: Sto;
    enable: any;
}

const Table: React.FC<ChildProps> = ({enable, sto}) => {
    const { azurirajPozicijuStola, zauzmiIliOslobodiSto, postaviTrenutniSto } = useActions();
    const [open, setOpen] = useState<boolean>(false);

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

    const closeModal = () => {
        setOpen(false);
    }

    const onTake = () => {
        zauzmiIliOslobodiSto(sto.id);
        if(sto.slobodan === true) {
            postaviTrenutniSto(sto.id, sto.oznaka, sto.konobar.ime);
        } else {
            postaviTrenutniSto(null,null,null);
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
                    { enable === false && 
                        <div className="table-button-wrap">
                            <button className="table-button" onClick={onTake}>{sto.slobodan ? 'Take' : 'Untake'}</button>
                        </div> 
                    }
                </div>
            </div>
        </Draggable>
        {open && <DeleteTable isOpen={open} closeModal={closeModal} idStola={sto.id}/>}
        </>
    )
}

export default Table;