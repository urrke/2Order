import { faAngleRight, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    return(
        <div>
            <div className="border-sec"></div>
            <section className="w3l-footer-16">
                <div className="w3l-footer-16-main">
                    <div className="container">
                        <div className="footer-div">
                            <div className="col-lg-4 pr-lg-5">
                                <h1>
                                    <NavLink className='title' to='/home'>
                                        <FontAwesomeIcon className='iconUtensils' icon={faUtensils} /> 2Order
                                    </NavLink>
                                </h1>
                                <p className="mt-4">
                                    Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam
                                    eget turpis ornare, euismod ligul aeget, enenatis dui. 
                                </p>
                            </div>
                            <div className="col-lg-4 mt-lg-0 mt-4">
                                <h3>Pages</h3>
                                <div className="row">
                                    <div className="col-6 column">
                                        <ul className="footer-gd-16">
                                            <li>
                                                <NavLink exact to="/home">
                                                    <FontAwesomeIcon icon={faAngleRight} /> Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink exact to="/menu">
                                                    <FontAwesomeIcon icon={faAngleRight} /> Menu
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink exact to="/tables">
                                                    <FontAwesomeIcon icon={faAngleRight} /> Tables
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink  exact to="/contact">
                                                    <FontAwesomeIcon icon={faAngleRight} /> Contact
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink  exact to="/about">
                                                    <FontAwesomeIcon icon={faAngleRight} /> About Us
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
                            <div className="columns text-lg-left">
                                <p className="copy-text">2021 | 2Order | All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;