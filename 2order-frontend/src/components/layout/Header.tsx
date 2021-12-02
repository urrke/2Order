import { faUtensils, faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Logout from "../auth/Logout";
import CurrentOrder from "../forms/CurrentOrder";

const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { vratiStavkeIzRacuna } = useActions();
    const { data } = useTypedSelector((state)=>state.auth);

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    const closeModal = () => {
        setOpen(false);
    }

    const openCurrentOrder = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        vratiStavkeIzRacuna();
        setOpen(true);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div>
            <header id="site-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke px-0">
                        <h1>
                            <NavLink className='title' to='/home'>
                                <FontAwesomeIcon className='iconUtensils' icon={faUtensils} /> 2Order
                            </NavLink>
                        </h1>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mx-lg-auto">
                                <li className="nav-item active">
                                    <NavLink className="tab" exact activeClassName="tab-active" to="/home">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="tab" exact activeClassName="tab-active" to="/menu">
                                        Menu
                                    </NavLink>
                                </li>
                                { data !== null &&
                                <li className="nav-item">
                                    <NavLink className="tab" exact activeClassName="tab-active" to="/tables">
                                        Tables
                                    </NavLink>
                                </li>}
                                <li className="nav-item">
                                    <NavLink className="tab" exact activeClassName="tab-active" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="tab" exact activeClassName="tab-active" to="/about">
                                        About Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="cont-ser-position">
                            <nav className="navigation" style={{display:"flex"}}>
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch">
                                        {data === null ?
                                            <div className="mode-container">
                                                <Link className="tab" to="/login">
                                                    <FontAwesomeIcon className='fa-lg' icon={faUser} />
                                                </Link>
                                            </div> 
                                            :
                                            <div className="mode-container">
                                                {data?.korisnik.tip === "Korisnik" ? 
                                                    <Link className="tab" to="/profile">
                                                        <FontAwesomeIcon className='fa-lg' icon={faUser} />
                                                    </Link> :
                                                    <Link className="tab" to="/admin">
                                                        <FontAwesomeIcon className='fa-lg' icon={faUser} />
                                                    </Link>
                                                }
                                            </div>
                                        }
                                    </label>
                                </div>
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch">
                                        { (data !== null && data.korisnik.tip == "Korisnik") &&
                                        <div className="mode-container">
                                            <a className='shoppingBasket' onClick={openCurrentOrder}>
                                                <FontAwesomeIcon className='fa-lg' icon={faShoppingBag} />
                                            </a>
                                        </div>
                                        }
                                    </label>
                                </div>
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch">
                                        {data && 
                                        <div className="mode-container">
                                            <Logout />
                                        </div>}
                                    </label>
                                </div>
                            </nav>
                        </div>
                    </nav>
                </div>
            </header>
            {open && <CurrentOrder isOpen={open} closeModal={closeModal} handleSubmit={handleSubmit}/>}
        </div>
    )
}

export default Header;