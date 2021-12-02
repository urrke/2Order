import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActions } from "../../hooks/useActions";

const Logout: React.FC = () => {
    const { odjava } = useActions();

    const onLogout = () => {
        odjava();
    }

    return (
        <div>
            <a className='shoppingBasket' onClick={onLogout}>
                <FontAwesomeIcon className='fa-lg' icon={faSignOutAlt} />
            </a>
        </div>
    )
}

export default Logout;