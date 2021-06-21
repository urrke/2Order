import Meni from "../model/Meni";

interface ChildProps {
    stavka: Meni;
}

const Drink: React.FC<ChildProps> = ({stavka}) => {
    return(
        <div>
            <div className="row menu-item">
                <div className="col-3 p-0 position-relative">
                    <img src="../images/menu1.jpg" className="drink-image" alt="" />
                    <a href="#order" className="btn button-style button-style-2">Add</a>
                </div>
                <div className="col-9 pl-4">
                    <div className="row no-gutters">
                        <div className="col-9 menu-item-name">
                            <h6>{stavka.naziv}</h6>
                        </div>
                        <div className="col-3 menu-item-price text-right">
                            <h6>{stavka.cena.toFixed(2)}din</h6>
                        </div>
                    </div>
                    <div className="menu-item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur tredjh adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drink;