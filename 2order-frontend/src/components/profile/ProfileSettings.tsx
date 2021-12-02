import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Korisnik from "../../model/Korisnik";

const ProfileSettings: React.FC = () => {
    const { azurirajKorisnika } = useActions();
    const { data } = useTypedSelector(state => state.auth);
    const [id, setId] = useState<number>(0);
    const [ime, setIme] = useState<string>('');
    const [prezime, setPrezime] = useState<string>('');
    const [adresa, setAdresa] = useState<string>('');
    const [grad, setGrad] = useState<string>('');
    const [tip, setTip] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [brojTel, setBrojTel] = useState<string>('');
    const [staraSifra, setStaraSifra] = useState<string>('');
    const [novaSifra, setNovaSifra] = useState<string>('');

    useEffect(() => {
        if(data) {
            setId(data.korisnik.id);
            setIme(data.korisnik.ime);
            setPrezime(data.korisnik.prezime);
            setAdresa(data.korisnik.adresa);
            setGrad(data.korisnik.grad);
            setTip(data.korisnik.tip);
            setEmail(data.korisnik.email);
            setBrojTel(data.korisnik.brojTelefona);
        }
    }, []);

    const saveChanges = () => {
        const k: Korisnik = {
            ime,
            prezime,
            adresa,
            grad,
            brojTelefona: brojTel,
            email,
            sifra: novaSifra,
            tip,
            id
        }
        azurirajKorisnika(k);
    }

    return (
        <div >
            <h3>Settings</h3>
            <form className="settings" onSubmit={saveChanges}>
                <div className="row-2">
                    <div className="column-2">
                        <label>First name</label>
                        <input 
                            value={ime} 
                            onChange={(e) => setIme(e.currentTarget.value)}
                            required
                        />
                    </div>
                    <div className="column-2">
                        <label>Last name</label>
                        <input 
                            value={prezime} 
                            onChange={(e) => setPrezime(e.currentTarget.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row-2">
                    <div className="column-2">
                        <label>Email</label>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            required
                            pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
                        />
                    </div>
                    <div className="column-2">
                        <label>Phone</label>
                        <input 
                            value={brojTel}
                            onChange={(e) => setBrojTel(e.currentTarget.value)}
                            required
                        /> 
                    </div>
                </div>
                <div className="row-2">
                    <div className="column-2">
                        <label>City</label>
                        <input 
                            value={grad} 
                            onChange={(e) => setGrad(e.currentTarget.value)}
                            required
                        />
                    </div>
                    <div className="column-2">
                        <label>Address</label>
                        <input 
                            value={adresa} 
                            onChange={(e) => setAdresa(e.currentTarget.value)}
                            required
                        />   
                    </div>
                </div>
                <div className="row-2">
                    <div className="column-2">
                        <label>Old password</label>
                        <input 
                            value={staraSifra} 
                            onChange={(e) => setStaraSifra(e.currentTarget.value)} 
                            type="password"
                            required
                        />
                    </div>
                    <div className="column-2">
                        <label>New password</label>
                        <input 
                            value={novaSifra} 
                            onChange={(e) => setNovaSifra(e.currentTarget.value)}
                            type="password"
                        />
                    </div>
                </div>
                <div className="row-buttons">
                    <button className="settings-save" type="submit" >Save</button>  
                </div>
            </form>
        </div>
    )
}

export default ProfileSettings;