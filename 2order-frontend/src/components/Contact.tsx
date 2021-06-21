import { useEffect } from "react";
import Header from "./layout/Header";
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact: React.FC = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header from={'Home'} to={'Contact'} path={'/home'}/>
            <section className="w3l-contact-info-main" id="contact">
                <div className="contact-sec py-5">
                    <div className="container py-md-4 py-3">
                        <div className="contact-w3pvt-form">
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
            </section>
        </div>
    )
}

export default Contact;