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
    const [ponovoSifra, setPonovoSifra] = useState<string>('');
    const [sifra, setSifra] = useState<string>('');
    const [changePass, setChangePass] = useState<boolean>(false);

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
            tip,
            id
        }
        if(changePass) {
            const kor: Korisnik = {...k, sifra }
            azurirajKorisnika(kor);
        } else {
            azurirajKorisnika(k);
        }
    }

    const validatePass = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.value !== sifra)
        {
            e.currentTarget.setCustomValidity('Passwords do not match!');
        }
        else
        {
            e.currentTarget.setCustomValidity('');
        }
    }

    const onChangePass = () => {
        setChangePass(!changePass);
    }

    return (
        <div >
            <h3>Settings</h3>
            <form className="settings" onSubmit={saveChanges}>
                <div className="row-2">
                    <div className="column-2">
                        <label>First name</label>
                        <input 
                            className="settings-input"
                            value={ime} 
                            onChange={(e) => setIme(e.currentTarget.value)}
                            required
                        />
                    </div>
                    <div className="column-2">
                        <label>Last name</label>
                        <input 
                            className="settings-input"
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
                            className="settings-input"
                            value={email} 
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            required
                            pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
                        />
                    </div>
                    <div className="column-2">
                        <label>Phone</label>
                        <input 
                            className="settings-input"
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
                            className="settings-input"
                            value={grad} 
                            onChange={(e) => setGrad(e.currentTarget.value)}
                            required
                        />
                    </div>
                    <div className="column-2">
                        <label>Address</label>
                        <input 
                            className="settings-input"
                            value={adresa} 
                            onChange={(e) => setAdresa(e.currentTarget.value)}
                            required
                        />   
                    </div>
                </div>
                <div className="row-2">
                    <div className="column-2">
                        <label>New password</label>
                        <input 
                            className="settings-input"
                            value={sifra} 
                            onChange={(e) => setSifra(e.currentTarget.value)} 
                            type="password"
                            required
                            minLength={6}
                            disabled={!changePass}
                        />
                    </div>
                    <div className="column-2">
                        <label>Repeat new password</label>
                        <input 
                            className="settings-input"
                            value={ponovoSifra} 
                            onChange={(e) => setPonovoSifra(e.currentTarget.value)}
                            type="password"
                            onInput={(e) => validatePass(e)}
                            required
                            minLength={6}
                            disabled={!changePass}
                        />
                    </div>
                </div>
                <div className="row-buttons">
                    <button className="settings-save" type="submit" >Save</button>
                    <input className="change-pass-checkbox" type="checkbox" checked={changePass} onChange={onChangePass}/>
                    <label className="change-pass-label">Change password</label>
                </div>
            </form>
        </div>
    )
}

export default ProfileSettings;