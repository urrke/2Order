import { combineReducers } from 'redux'
import stoReducer from '../reducers/stoReducer'
import korisnikReducer from './korisnikReducer';
import stavkaMenijaReducer from './stavkaMenijaReducer';
import porudzbinaReducer from './porudzbinaReducer';
import recenzijaReducer from './recenzijaReducer';
import trenutniRacunReducer from './trenutniRacunReducer';
import racunReducer from './racunReducer';
import authReducer from './authReducer';
import signalrReducer from './signalRReducer';

const reducers = combineReducers({
    korisnici: korisnikReducer,
    porudzbine: porudzbinaReducer,
    racuni: racunReducer,
    recenzije: recenzijaReducer,
    stavkeMenija: stavkaMenijaReducer,
    stolovi: stoReducer,
    trenutniRacun: trenutniRacunReducer,
    auth: authReducer,
    signalR: signalrReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;