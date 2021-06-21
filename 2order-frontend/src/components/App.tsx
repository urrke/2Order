import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Index from "./Index";
import Footer from "./layout/Footer";
import Menu from "./Menu";
import Tables from "./Tables";

const App: React.FC = () => {

    const history = useHistory();

    useEffect(()=>{
        history.push('/home');
        window.scrollTo(0, 0);
    }, [])

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
                                <NavLink className="tab"  activeClassName="tab-active" to="/menu">
                                    Menu
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="tab" exact activeClassName="tab-active" to="/tables">
                                    Tables
                                </NavLink>
                                </li>
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
                    </nav>
                </div>
            </header>
            <Route path="/home" exact component={() => <Index />} />
            <Route path="/menu" component={() => <Menu />} />
            <Route path="/tables" exact component={() => <Tables />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/about" exact component={() => <AboutUs />} />
            <Footer />
        </div>
    )
}

export default App;