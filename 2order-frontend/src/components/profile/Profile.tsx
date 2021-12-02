import Footer from "./../layout/Footer";
import Header from "./../layout/Header";
import Navigator from "./../layout/Navigator";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ProfileSettings from "./ProfileSettings";
import BillsList from "./BillsList";
import ReviewsList from "./ReviewsList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Profile: React.FC = () => {
    const { vratiRacuneKorisnika, vratiRecenzijeKorisnika } = useActions();
    const [show, setShow] = useState<string | null>(null);
    const { data } = useTypedSelector(state => state.auth);

    useEffect(() => {
        if(data) {
            vratiRecenzijeKorisnika(data.korisnik.id);
            vratiRacuneKorisnika(data.korisnik.id);
        }
    }, [])

    const onChange = (e: React.MouseEvent<HTMLLIElement>, tip: string) => {
        e.preventDefault();
        setShow(tip);
    }

    return (
        <div>
            <Header />
            <Navigator from={'Home'} to={'Profile'} path={'/home'}/>
                <div className="row">
                    <div className="profile-left">
                        <ProSidebar className="sidebar">
                            <Menu className="sidebar-menu">
                                <MenuItem 
                                    className="sidebar-item" 
                                    onClick={(e) => onChange(e,'settings')} 
                                    icon={<FontAwesomeIcon className='fa-lg' icon={faUser} />}>
                                        Settings
                                </MenuItem>
                                <MenuItem 
                                    className="sidebar-item" 
                                    onClick={(e) => onChange(e,'bills')} 
                                    icon={<FontAwesomeIcon className='fa-lg' icon={faReceipt} />}>
                                        Bills
                                </MenuItem>
                                <MenuItem 
                                    className="sidebar-item" 
                                    onClick={(e) => onChange(e,'reviews')} 
                                    icon={<FontAwesomeIcon className='fa-lg' 
                                    icon={faStar} />}>
                                        Reviews
                                </MenuItem>
                            </Menu>
                        </ProSidebar>
                    </div>
                    <div className="profile-right">
                        {show !== null && 
                        (show === 'settings' ? <ProfileSettings /> : 
                        (show === 'bills' ? <BillsList /> : <ReviewsList />))}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Profile;