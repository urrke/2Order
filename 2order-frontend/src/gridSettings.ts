import { FilterSettingsModel, SelectionSettingsModel } from "@syncfusion/ej2-react-grids";
import Korisnik from "./model/Korisnik";
import StavkaMenija from "./model/StavkaMenija";
import Sto from "./model/Sto";

export const toolbarOptions: any = [{ text: 'Delete', tooltipText: 'Delete', prefixIcon: 'e-delete', id: 'delete' }];

export const toolbarOptionsWithAdd: any = [{ text: 'Add', tooltipText: 'Add', prefixIcon: 'e-add', id: 'add' },
    { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'e-delete', id: 'delete' },
    { text: 'Update', tooltipText: 'Update', prefixIcon: 'e-update', id: 'update' }];

export const editSettings: any = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };

export const filterSettings: FilterSettingsModel = { ignoreAccent: true, type: "Excel" }

export const settings: SelectionSettingsModel = { type: 'Multiple', checkboxOnly: true };

export const requiredRule: object = { required: [true, 'This field is required!'] };

export const dateParams: any = { params: { format: 'dd.MM.yyyy.' } };

export const pageSettings: any = { pageSize: 10 };

export interface IBatchChangesSto {
    changedRecords: Sto[];
    addedRecords: Sto[];
    deletedRecords: Sto[];
}

export interface IBatchChangesKorisnik {
    changedRecords: Korisnik[];
    addedRecords: Korisnik[];
    deletedRecords: Korisnik[];
}

export interface IBatchChangesStavka {
    changedRecords: StavkaMenija[];
    addedRecords: StavkaMenija[];
    deletedRecords: StavkaMenija[];
}