export const pushToArray = (data: any, state: any[]): any[] => {
    return [data, ...state];
};
  
export const filterData = (data: number[], state: any[]): any[] => {
    var podaci = state;
    for (let i = 0; i < data.length; i++) podaci = podaci.filter((x) => x.id !== data[i]);
    return podaci;
};

export const filterOneData = (data: number, state: any[]): any[] => {
    var podaci = state;
    podaci = podaci.filter((x) => x.id !== data);
    return podaci;
};
  
export const updateData = (data: any[], state: any[]): any[] => {
    let niz: number[] = [];
    for (let i = 0; i < data.length; i++) niz.push(data[i].id);
    var podaci = filterData(niz, state);
    return mergeArrays(data, podaci);
};

export const updateOneData = (data: any, state: any[]): any[] => {
    var podaci = filterOneData(data.id, state);
    return pushToArray(data, podaci);
};
  
export const mergeArrays = (data: any[], state: any[]): any[] => {
    return [...data, ...state];
};
  
export const swap = (data: any, state: any[]) => {
    var podaci = [...state];
    var position = podaci.findIndex((x) => x.id === data.id);
    podaci.splice(position, 1, data);
    return podaci;
};

export const findAndDelete = (data: number, state: any[]): any[] => {
    var podaci = state;
    var index = podaci.findIndex((x) => x.id === data);
    if(index !== -1) {
        podaci.splice(index,1);
    }
    return podaci;
}

export const updateTablePosition = (state: any[], id: number, x: number, y: number): any[] => {
    var table = state.find((x) => x.id === id);
    if(table != null) {
        table.x = x;
        table.y = y;
    }
    return swap(table, state);
}