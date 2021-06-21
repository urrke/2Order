import { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Dictionary, groupBy } from 'lodash'
import Meni from "../model/Meni";
import Drink from "./Drink";

const Drinks: React.FC = () => {
    const { vratiMeniPoTipu } = useActions();
    const { stavkeMenija, loading, error } = useTypedSelector((state)=>state.stavkeMenija);
    const [grupe, setGrupe] = useState<Dictionary<Meni[]>>();

    useEffect(()=> {
        vratiMeniPoTipu('Pice');
        grupisi();
    }, []);

    const grupisi = () => {
        var grupe: Dictionary<Meni[]> = groupBy(stavkeMenija, 'grupa');
        setGrupe(grupe);
        /*Object.keys(grupe).map(function(key, index) {
            grupe[key].map((el:Meni)=>console.log(el.naziv));
        });*/
    }

    return (
        <>
            {error ? (<h3>{error}</h3>) : (
                <>
                    {loading ? (<div className="loader"></div>) : (
                        <div className='drinks-container'>
                            {stavkeMenija.map((stavka:Meni) => <Drink key={stavka.id} stavka={stavka} />)}
                        </div>  
                    )}
                </>
            )}
        </>
    )
}

export default Drinks;