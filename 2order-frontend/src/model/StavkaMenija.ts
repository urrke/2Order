export interface IStavkaMenija {
    getPrice(): number;
    getDescription(): string;
}

class StavkaMenija implements IStavkaMenija {
    id: number = 0;
    naziv: string;
    tip: string;
    grupa: string;
    cena: number;

    constructor(stavka: StavkaMenija) {
        this.id = stavka.id;
        this.naziv = stavka.naziv;
        this.tip = stavka.tip;
        this.grupa = stavka.grupa;
        this.cena = stavka.cena;
    }

    getPrice(): number {
        return this.cena;
    }

    getDescription(): string {
        return this.naziv;
    }
}

class Decorator implements IStavkaMenija {
    stavka: IStavkaMenija;

    constructor(stavka: IStavkaMenija) {
        this.stavka = stavka;
    }

    getPrice(): number {
        return this.stavka.getPrice();
    }

    getDescription(): string {
        return this.stavka.getDescription();
    }
}

export class KetchupDecorator extends Decorator {
    getPrice(): number {
        return super.getPrice() + 40;
    }

    getDescription(): string {
        return super.getDescription() + ' + Ketchup ';
    }
}

export class MayonnaiseDecorator extends Decorator {
    getPrice(): number {
        return super.getPrice() + 60;
    }

    getDescription(): string {
        return super.getDescription() + ' + Mayonnaise ';
    }
}

export default StavkaMenija;