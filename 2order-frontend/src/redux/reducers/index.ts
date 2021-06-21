import { combineReducers } from 'redux'
import stoReducer from '../reducers/stoReducer'
import dostavaReducer from './dostavaReducer';
import korisnikReducer from './korisnikReducer';
import meniReducer from './meniReducer';
import porudzbinaReducer from './porudzbinaReducer';
import recenzijaReducer from './recenzijaReducer';

const reducers = combineReducers({
    stolovi: stoReducer,
    korisnici: korisnikReducer,
    recenzije: recenzijaReducer,
    stavkeMenija: meniReducer,
    dostave: dostavaReducer,
    porudzbine: porudzbinaReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;