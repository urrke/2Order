import Footer from "./../layout/Footer";
import Header from "./../layout/Header";
import Navigator from "./../layout/Navigator";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faReceipt, faStar, faTable, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Bills from "./Bills";
import Reviews from "./Reviews";
import Tables from "./Tables";
import Items from "./Items";
import Employees from "./Employees";
import Users from "./Users";

const Admin: React.FC = () => {
    const [show, setShow] = useState<string | null>(null); 

    const onChange = (e: React.MouseEvent<HTMLLIElement>, tip: string) => {
        e.preventDefault();
        setShow(tip);
    }

    const redirect = (page: string) => {
        switch(page) {
            case 'tables':
                return <Tables/>;
            case 'items':
                return <Items/>;
            case 'employees':
                return <Employees/>;
            case 'bills':
                return <Bills/>;
            case 'reviews':
                return <Reviews/>;
            default:
                return <Users/>;
        }
    }

    return (
        <div>
            <Header />
            <Navigator from={'Home'} to={'Admin'} path={'/home'}/>
                <div className="row">
                    <div className="admin-left">
                        <ProSidebar className="sidebar">
                            <Menu className="sidebar-menu">
                                <MenuItem 
                                    className="sidebar-item" 
                                    onClick={(e) => onChange(e,'items')} 
                                    icon={<FontAwesomeIcon className='fa-lg' icon={faHamburger} />}>
                                        Items
                                </MenuItem>
                                <MenuItem 
                                    className="sidebar-item" 
                                    onClick={(e) => onChange(e,'employees')} 
                                    icon={<FontAwesomeIcon className='fa-lg' icon={faUser} />}>
                                        Employees
                                </MenuItem>
                                <MenuItem 
                                    className="sidebar-item" 
                                    onClick={(e) => onChange(e,'tables')} 
                                    icon={<FontAwesomeIcon className='fa-lg' icon={faTable} />}>
                                        Tables
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
                                    icon={<FontAwesomeIcon className='fa-lg' icon={faStar} />}>
                                        Reviews
                                </MenuItem>
                                <MenuItem 
                                    className="sidebar-item" 
                                    onClick={(e) => onChange(e,'users')} 
                                    icon={<FontAwesomeIcon className='fa-lg' icon={faUser} />}>
                                        Users
                                </MenuItem>
                            </Menu>
                        </ProSidebar>
                    </div>
                    <div className="admin-right">
                        {show !== null && redirect(show)}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Admin;