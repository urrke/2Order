import StavkaMenija from "../model/StavkaMenija";

interface StavkaIBrojPonavljanja {
    stavka: StavkaMenija;
    broj: number;
}

export function useCheckDuplicate () {

    const groupBy = (list: any, keyGetter: any) => {
        const map = new Map();
        list.forEach((item: any) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    const checkDuplicate = (trenutniRacun: StavkaMenija[]) => {
        let keysToShow: StavkaMenija[] = [];
        let amountToShow: number[] = [];
        const grouped = groupBy(trenutniRacun, (stavka: StavkaMenija) => stavka.naziv);
        
        grouped.forEach(group => {
            amountToShow.push(group.length);
        });

        const keys = grouped.values();
        let key = keys.next();
        while(key.done === false)
        {
            keysToShow.push(key.value[0]);
            key = keys.next();
        }

        let values: StavkaIBrojPonavljanja[] = [];
        for(var i = 0; i < keysToShow.length; i++) {
            var obj = {
                stavka: keysToShow[i],
                broj: amountToShow[i]
            }
            values.push(obj);
        }
        var result = values.sort(compare)
        return result;
    }

    const compare = (a: StavkaIBrojPonavljanja, b: StavkaIBrojPonavljanja) => {
        if ( a.stavka.naziv < b.stavka.naziv ){
          return -1;
        }
        if ( a.stavka.naziv > b.stavka.naziv ){
          return 1;
        }
        return 0;
      }

    return [checkDuplicate];
}