import axios from "axios";
import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AboutUs from "./AboutUs";
import Admin from "./admin/Admin";
import Login from "./auth/Login";
import Contact from "./Contact";
import Index from "./Index";
import Menu from "./menu/Menu";
import Profile from "./profile/Profile";
import Tables from "./table/Tables";

const Home: React.FC = () => {
    const { vratiToken, konekcija } = useActions();
    const { data, loading } = useTypedSelector((state)=>state.auth);
    const history = useHistory();

    useEffect(() => {
        konekcija();
    }, []);

    useEffect(() => {
        vratiToken();
        data ? history.push("/home") : history.push("/login");
        if(data) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        }
    }, [data]);

    return(
        <div>
            {loading ? <div className="loader margin-top"></div> : 
                <div>
                    <Route path="/login" exact component={() => <Login /> } />
                    <Route path="/home" exact component={() => <Index />} />
                    <Route path="/menu" exact component={() => <Menu />} />
                    <Route path="/tables" exact component={() => <Tables />} />
                    <Route path="/contact" exact component={() => <Contact />} />
                    <Route path="/about" exact component={() => <AboutUs />} />
                    <Route path="/profile" exact component={() => <Profile />} />
                    <Route path="/admin" exact component={() => <Admin />} />
                </div>
            }
        </div>
    )
}

export default Home;