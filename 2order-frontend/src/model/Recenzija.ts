import Racun from "./Racun";

interface Recenzija {
    id: number;
    ocena: number;
    komentar: string;
    vreme: Date;
    racunId: number;
    racun: Racun;
}

export default Recenzija;