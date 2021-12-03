import Porudzbina from "./Porudzbina";
import Sto from "./Sto";

interface Racun {
    id: number;
    vreme: Date;
    listaPorudzbina: Porudzbina[];
    stoId?: number;
    sto?: Sto;
    iznos: string;
}

export default Racun;