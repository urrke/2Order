import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface ChildProps {
    from: string;
    to: string;
    path: string;
}

const Header: React.FC<ChildProps> = ({from, to, path}) => {
    return(
        <div className="inner-banner">
            <section className="w3l-breadcrumb">
                <div className="container">
                    <h4 className="inner-text-title font-weight-bold mb-sm-3 mb-2">{to}</h4>
                    <ul className="breadcrumbs-custom-path">
                        <NavLink className="breadcrumb-path" exact to={path}>
                        {from} 
                        </NavLink>
                        <li><FontAwesomeIcon icon={faAngleRight} /> {to}</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Header;