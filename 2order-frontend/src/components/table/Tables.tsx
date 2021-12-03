import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Sto from "../../model/Sto";
import Footer from "./../layout/Footer";
import Header from "./../layout/Header";
import Navigator from "./../layout/Navigator";
import Table from "./Table";
import React from "react";
import NewTable from "../forms/NewTable";

const Tables: React.FC = () => {
    const { vratiSveStolove, azurirajStolove } = useActions();
    const { stolovi, loading, error } = useTypedSelector((state)=>state.stolovi);
    const { data } = useTypedSelector((state)=>state.auth);
    const [enableDragging, setEnableDragging] = useState<any>();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(()=> {
        vratiSveStolove();
        setEnableDragging(false);
    }, []);

    const onChangeEnableDragging = () => {
        if(enableDragging === false) {
            setEnableDragging({});
        } else {
            setEnableDragging(false);
        }
    }

    const addTable = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    const saveTables = () => {
        azurirajStolove(stolovi);
    }

    return (
        <>
            {error ? (<h3>{error}</h3>) : (
                <>
                    <Header />
                    <Navigator from={'Home'} to={'Tables'} path={'/home'}/>
                    {loading ? (<div className="loader margin-top"></div>) :
                        (<div className="tables">
                            { (data !== null && data.korisnik.tip == "Radnik") &&
                            <div className="tables-buttons" id="tables-buttons">
                                <button className="tables-enable" onClick={onChangeEnableDragging}>
                                    {enableDragging === false ? 'Enable' : 'Disable'}
                                </button>
                                <button className="tables-add" onClick={addTable}>Add</button>
                                <button className="tables-add" onClick={saveTables}>Save</button>
                            </div> }
                            <div className="tables-container" id='tables-container'>
                                <div className="box" style={{height: '570px', width: '100%', position: 'relative', overflow: 'auto', padding: '0'}}>
                                    <div style={{height: '570px', width: '100%', padding: '10px'}}>
                                        {stolovi.map((sto: Sto) => (<Table sto={sto} enable={enableDragging} />))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <Footer />
                </>
            )}
            {open && <NewTable isOpen={open} closeModal={closeModal}/>}
        </>
    )
}

export default Tables;