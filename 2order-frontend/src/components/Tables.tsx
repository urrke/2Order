import { useEffect } from "react";
import Header from "./layout/Header";

const Tables: React.FC = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header from={'Home'} to={'Tables'} path={'/home'}/>

        </div>
    )
}

export default Tables;