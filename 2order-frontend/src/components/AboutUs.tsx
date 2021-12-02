import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Navigator from "./layout/Navigator";

const AboutUs: React.FC = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return(
        <div>
            <Header />
            <Navigator from={'Home'} to={'About Us'} path={'/home'}/>
            <section className="w3l-about2">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 about-2-secs py-lg-5 pt-lg-0 pt-5">
                                <h3 className="title-big">Only fresh and healthy Products for you!</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet efficitur tortor
                                </p>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} className='faAboutUs' />
                                        Ut enim ad minim veniam
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} className='faAboutUs' />
                                        Quis nostrud exercitation ullamco laboris
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} className='faAboutUs' />
                                        Nisi ut aliquip ex ea commodo consequat
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faAngleRight} className='faAboutUs' />
                                        In et augue ornare, tempor massa in
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3_stats py-5" id="stats">
                <div className="container py-md-4 py-3">
                    <div className="w3-stats">
                        <div className="row text-center">
                            <div className="col-md-3 col-6">
                                <div className="counter">
                                    <div className="timer count-title count-number">5000</div>
                                    <p className="count-text ">happy customer's</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="counter">
                                    <div className="timer count-title count-number">5</div>
                                    <p className="count-text ">master chef's</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mt-md-0 mt-4">
                                <div className="counter">
                                    <div className="timer count-title count-number">50</div>
                                    <p className="count-text ">Order's Everyday</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 mt-md-0 mt-4">
                                <div className="counter">
                                    <div className="timer count-title count-number">4</div>
                                    <p className="count-text ">Year's of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AboutUs;