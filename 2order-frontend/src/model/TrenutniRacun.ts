import StavkaMenija from "./StavkaMenija";

interface StavkaIBrojPonavljanja {
    stavka: StavkaMenija;
    broj: number;
}

interface TrenutniRacun {
    stavke: StavkaMenija[];
    racun: StavkaIBrojPonavljanja[];
    iznos: number;
}

export default TrenutniRacun;