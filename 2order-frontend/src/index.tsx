import ReactDOM from 'react-dom';
import './style/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SnackbarProvider } from 'notistack';
import Home from './components/Home';
import Messages from './components/Messages';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <SnackbarProvider maxSnack={2}>
        <Home />
      </SnackbarProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
