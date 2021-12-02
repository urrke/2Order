import Porudzbina from "./Porudzbina";
import Sto from "./Sto";

interface Racun {
    id: number;
    vreme: Date;
    tip: string;
    listaPorudzbina: Porudzbina[];
    stoId: number;
    sto: Sto;
    brojTelefona: string;
    grad: string;
    adresa: string;
    iznos: string;
}

export default Racun;