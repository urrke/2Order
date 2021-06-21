import Meni from '../../model/Meni';
import { ActionType } from '../action-types'

interface VratiStavkuIzMenijaAction {
    type: ActionType.VRATI_STAVKU_IZ_MENIJA_LOADING;
}

interface VratiStavkuIzMenijaActionSuccess {
    type: ActionType.VRATI_STAVKU_IZ_MENIJA_SUCCESS;
    payload: Meni;
}

interface VratiStavkuIzMenijaActionError {
    type: ActionType.VRATI_STAVKU_IZ_MENIJA_ERROR;
    payload: string;
}

interface VratiCeoMeniAction {
    type: ActionType.VRATI_CEO_MENI_LOADING;
}

interface VratiCeoMeniActionSuccess {
    type: ActionType.VRATI_CEO_MENI_SUCCESS;
    payload: Meni[];
}

interface VratiCeoMeniActionError {
    type: ActionType.VRATI_CEO_MENI_ERROR;
    payload: string;
}

interface VratiMeniPoTipuAction {
    type: ActionType.VRATI_MENI_PO_TIPU_LOADING;
}

interface VratiMeniPoTipuActionSuccess {
    type: ActionType.VRATI_MENI_PO_TIPU_SUCCESS;
    payload: Meni[];
}

interface VratiMeniPoTipuActionError {
    type: ActionType.VRATI_MENI_PO_TIPU_ERROR;
    payload: string;
}

interface VratiMeniPoGrupiAction {
    type: ActionType.VRATI_MENI_PO_GRUPI_LOADING;
}

interface VratiMeniPoGrupiActionSuccess {
    type: ActionType.VRATI_MENI_PO_GRUPI_SUCCESS;
    payload: Meni[];
}

interface VratiMeniPoGrupiActionError {
    type: ActionType.VRATI_MENI_PO_GRUPI_ERROR;
    payload: string;
}


interface DodajStavkuUMeniAction {
    type: ActionType.DODAJ_STAVKU_U_MENI_LOADING;
}

interface DodajStavkuUMeniActionSuccess {
    type: ActionType.DODAJ_STAVKU_U_MENI_SUCCESS;
    payload: Meni;
}

interface DodajStavkuUMeniActionError {
    type: ActionType.DODAJ_STAVKU_U_MENI_ERROR;
    payload: string;
}

interface ObrisiStavkuIzMenijaAction {
    type: ActionType.OBRISI_STAVKU_IZ_MENIJA_LOADING;
}

interface ObrisiStavkuIzMenijaActionSuccess {
    type: ActionType.OBRISI_STAVKU_IZ_MENIJA_SUCCESS;
    payload: Meni;
}

interface ObrisiStavkuIzMenijaActionError {
    type: ActionType.OBRISI_STAVKU_IZ_MENIJA_ERROR;
    payload: string;
}

interface AzurirajCenuStavkeIzMenijaAction {
    type: ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_LOADING;
}

interface AzurirajCenuStavkeIzMenijaActionSuccess {
    type: ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_SUCCESS;
    payload: Meni;
}

interface AzurirajCenuStavkeIzMenijaActionError {
    type: ActionType.AZURIRAJ_CENU_STAVKE_IZ_MENIJA_ERROR;
    payload: string;
}

export type MeniAction = VratiStavkuIzMenijaAction | VratiStavkuIzMenijaActionSuccess | VratiStavkuIzMenijaActionError
| VratiCeoMeniAction | VratiCeoMeniActionSuccess | VratiCeoMeniActionError
| VratiMeniPoTipuAction | VratiMeniPoTipuActionSuccess | VratiMeniPoTipuActionError
| VratiMeniPoGrupiAction | VratiMeniPoGrupiActionSuccess | VratiMeniPoGrupiActionError
| DodajStavkuUMeniAction | DodajStavkuUMeniActionSuccess | DodajStavkuUMeniActionError
| ObrisiStavkuIzMenijaAction | ObrisiStavkuIzMenijaActionSuccess | ObrisiStavkuIzMenijaActionError
| AzurirajCenuStavkeIzMenijaAction | AzurirajCenuStavkeIzMenijaActionSuccess | AzurirajCenuStavkeIzMenijaActionError;