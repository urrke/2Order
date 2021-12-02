import { useEffect } from "react";
import Navigator from "./layout/Navigator";
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const Contact: React.FC = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header />
            <Navigator from={'Home'} to={'Contact'} path={'/home'}/>
            <section className="w3l-about2">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 about-2-secs py-lg-5 pt-lg-0 pt-5">
                                <h3 className="title-big mb-5">Get In Touch</h3>
                                <div className='contactDiv'>
                                    <div className='contactDiv-left'>
                                        <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} /> email: </p>
                                        <p className="mb-2"><FontAwesomeIcon icon={faPhone} /> Phone: </p>
                                        <p className="mb-2"><FontAwesomeIcon icon={faMapMarker} /> Address: </p>
                                        <p className="mb-2"><FontAwesomeIcon icon={faMapMarker} /> City: </p>
                                        <p className="mb-2"><FontAwesomeIcon icon={faMapMarker} /> State: </p>
                                    </div>
                                    <div className='contactDiv-right'>
                                        <p className="mb-2"><a href="mailto:2order@gmail.com"> 2order@gmail.com</a></p>
                                        <p className="mb-2"><a href="tel:+381 (0) 65 123 456">+381 (0) 65 123 456</a></p>
                                        <p className="mb-2"> Rentgenova 15</p>
                                        <p className="mb-2"> Nis</p>
                                        <p className="mb-2"> Serbia</p>
                                    </div>
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

export default Contact;