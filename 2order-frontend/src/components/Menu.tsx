import { useEffect } from "react";
import Header from "./layout/Header";
import { faHamburger, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Route } from "react-router-dom";
import Food from "./Food";
import Drinks from './Drinks'

const Menu: React.FC = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header from={'Home'} to={'Menu'} path={'/home'}/>
            <div className='menu-container'>
                <h4 className='menu-choose'>Choose category below</h4>
                <div>
                    <NavLink className="btn button-style" style={{marginRight:'10px'}} activeClassName='active-menu-type' exact to="/menu/food">
                        <FontAwesomeIcon icon={faHamburger}/> Food
                    </NavLink>
                    <NavLink className="btn button-style" activeClassName='active-menu-type' exact to="/menu/drinks">
                        <FontAwesomeIcon icon={faCoffee}/> Drinks
                    </NavLink>
                </div>
            </div>
            <Route exact path="/menu/food" component={() => <Food />} />
            <Route exact path="/menu/drinks" component={() => <Drinks />} />
        </div>
    )
}

export default Menu;