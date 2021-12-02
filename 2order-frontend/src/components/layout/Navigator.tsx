import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface ChildProps {
    from: string;
    to: string;
    path: string;
}

const Navigator: React.FC<ChildProps> = ({to}) => {
    return(
        <div className="inner-banner">
            <section className="breadcrumb-section">
                <div className="container">
                    <h4 className="inner-text-title font-weight-bold mb-sm-3 mb-2">{to}</h4>
                </div>
            </section>
        </div>
    )
}

export default Navigator;