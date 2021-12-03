import { faPhoneVolume, faMotorcycle, faShoppingBasket, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useNotifications } from '../hooks/useNotifications';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Footer from './layout/Footer';
import Header from './layout/Header';

const Index: React.FC = () => {
    const { connection } = useTypedSelector(state => state.signalR);
    const [showMessage] = useNotifications();

    useEffect(()=>{
        window.scrollTo(0, 0);
        connection && connection.on("dodajKorisnika", ime => 
        {
            showMessage(`${ime} joined your table!`, "info");
        });
        connection && connection.on("izbaciKorisnika", ime => 
        {
            showMessage(`${ime} left your table!`, "info");
        });
    }, []);

    return (
        <div>
            <Header />
            <section id="home" className="w3l-banner py-5">
                <div className="container pt-5 pb-md-4">
                    <div className="row align-items-center">
                        <div className="col-md-6 pt-md-0 pt-4">
                            <h3 className="mb-sm-4 mb-3 title">
                                Eat Fresh
                                <br></br>
                                Drink Fresh
                            </h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                magni dolores eos qui ratione voluptatem sequi nesciunt
                            </p>
                            <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                                <NavLink className="btn button-style" exact to="/menu">
                                    View our Menu
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                            <img className="img-fluid" src="images/bannerimg.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w3l-content-photo-5">
                <div className="content pb-5 pt-md-5 pt-4">
                    <div className="container py-lg-4 py-md-3">
                        <div className="row">
                            <div className="col-lg-6 content-photo">
                                <img src="images/about.png" className="img-responsive" alt=""/>
                            </div>
                            <div className="col-lg-6 content-left mb-md-0 mb-3">
                                <h3>Welcome To <span>2Order</span></h3>
                                <p>
                                    Aptent taciti sociosqu ad litora
                                    conubia nostra, per inceptos himenaeos. Aenean volutpat elementum ante, id eleifend eros
                                    luctus sit.
                                </p>
                                <p>
                                    Nunc vel pellentesque. Class aptent taciti sociosqu ad litora
                                    torquent per
                                    conubia nostra, per inceptos himenaeos. Aenean volutpat elementum ante, id eleifend eros
                                    luctus sit
                                    amet. vel tincidunt erat neque non ipsum. Ut sollicitudin pharetra enim.
                                </p>
                                <NavLink className="btn button-style" exact to="/about">
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="w3l-features-4">
                <div className="features4-block text-center py-5">
                    <div className="container py-md-5 py-3">
                        <div className="row features4-grids">
                            <div className="col-lg-4 col-md-6">
                                <div className="features4-grid">
                                    <FontAwesomeIcon className='iconGrid fa-2x' icon={faMotorcycle} />
                                    <h5 className='index-grid'>Fast Delivery</h5>
                                    <p>
                                        Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere curae fers
                                        luctus eted.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                                <div className="features4-grid">
                                    <FontAwesomeIcon className='iconGrid fa-2x' icon={faShoppingBasket} />
                                    <h5 className='index-grid'>Fresh Ingredients</h5>
                                    <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere curae fers
                                        luctus eted.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                                <div className="features4-grid">
                                    <FontAwesomeIcon className='iconGrid fa-2x' icon={faLaptop} />
                                    <h5 className='index-grid'>Online Suport 24/7</h5>
                                    <p>
                                        Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere curae fers
                                        luctus eted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-call-to-action-6">
                <div className="call-vv-action py-5">
                    <div className="container py-md-4 py-3">
                        <div className="grid">
                            <div className="float-lt">
                                <h3 className="title-big">Contact us now!</h3>
                                <p>For Online queries, please call us today</p>
                            </div>
                            <div className="float-rt text-right">
                                <ul className="buttons">
                                    <li className="phone">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                        <a className="call-style-w3" href="tel:+381 (0) 65 123 456"> +381 (0) 65 123 456</a>
                                    </li>
                                    <li className="green">Or</li>
                                    <li>
                                        <NavLink className="btn button-style" exact to="/contact">
                                            Get in touch
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Index;