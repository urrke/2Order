import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Meal from "./Meal";
import axios from "axios";
import config from '../../app.config.json'
import StavkaMenija from "../../model/StavkaMenija";

const Food: React.FC = () => {
    const { vratiStavkeMenijaPoTipu, vratiStavkeMenijaPoGrupi } = useActions();
    const { stavkeMenija, loading, error } = useTypedSelector((state)=>state.stavkeMenija);
    const [grupe, setGrupe] = useState<string[]>();

    useEffect(()=> {
        vratiStavkeMenijaPoTipu('Hrana');
        vratiGrupe();
    }, []);

    const vratiGrupe = async () => {
        var result = await axios.get(`${config.server}/StavkaMenija/vratiGrupe/hrana`);
        setGrupe(result.data);
    }

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        if(e.target.value === 'All') {
            vratiStavkeMenijaPoTipu('Hrana');
        } else {
            vratiStavkeMenijaPoGrupi(e.target.value);
        }
    }

    return (
        <>
            {error ? (<h3>{error}</h3>) : (
                <>
                    <div className='selectGroup'>
                        <h4 className="filter-label">Filter category</h4>
                        <select className='selectListGroup' onChange={onSelectChange}>
                            <option value={'All'}>All</option>
                            {grupe?.map((grupa: string, index: number)=><option key={index} value={grupa}>{grupa}</option>)}
                        </select>
                    </div>
                    {loading ? (<div className="loader margin-top"></div>) : (
                        <div className='drinks-food-container'>
                            {stavkeMenija.map((stavka: StavkaMenija) => <Meal key={stavka.id} stavka={stavka}/>)}
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default Food;