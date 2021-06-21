import { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Dictionary, groupBy } from 'lodash'
import Meni from "../model/Meni";
import Meal from "./Meal";

const Food: React.FC = () => {
    const { vratiMeniPoTipu } = useActions();
    const { stavkeMenija, loading, error } = useTypedSelector((state)=>state.stavkeMenija);
    const [grupe, setGrupe] = useState<Dictionary<Meni[]>>();

    useEffect(()=> {
        vratiMeniPoTipu('Hrana');
        grupisi();
    }, []);

    const grupisi = () => {
        var grupe: Dictionary<Meni[]> = groupBy(stavkeMenija, 'grupa');
        setGrupe(grupe);
        /*Object.keys(grupe).map(function(key, index) {
            grupe[key].map((el:Meni)=>console.log(el.naziv));
        });*/
    }

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <>
            {error ? (<h3>{error}</h3>) : (
                <>
                    {loading ? (<div className="loader"></div>) : (
                        <div className='food-container'>
                            <select className='select-food' onChange={onSelectChange}>
                                <option value='Sok'>Sok</option>
                                <option value='Pivo'>Pivo</option>
                            </select>
                            {stavkeMenija.map((stavka:Meni) => <Meal key={stavka.id} stavka={stavka} />)}
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default Food;