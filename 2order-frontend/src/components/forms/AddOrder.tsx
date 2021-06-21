const AddOrder: React.FC = () => {
    return(
        <div>

        </div>
    )
}

export default AddOrder;

/*import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { onInputRequire, racunValidation } from '../../validation';
import { useStyles } from '../../formSettings';

interface ChildProps {
    isOpen: boolean;
    closeModal: React.MouseEventHandler<HTMLButtonElement>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
  }
  
  const AddOrder: React.FC<ChildProps> = ({ isOpen, closeModal, handleSubmit }) => {
    const classes = useStyles();
    const { dodajKorisnika } = useActions();
    const [nazivKorisnika, setNazivKorisnika] = useState<string>('');
    const [mestoKorisnika, setMestoKorisnika] = useState<string>('');
    const [racunKorisnika, setRacunKorisnika] = useState<string>('');
    const [modelKorisnika, setModelKorisnika] = useState<string>('');
    const [pozivNaBrojKorisnika, setPozivNaBrojKorisnika] = useState<string>('');
  
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dodajKorisnika(nazivKorisnika, mestoKorisnika, racunKorisnika, modelKorisnika, pozivNaBrojKorisnika);
      handleSubmit(e);
    };
  
    return (
      <Modal
        className={classes.modal}
        open={isOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h3 className="modal-title">Kreiranje korisnika</h3>
            <form onSubmit={onSubmit}>
              <div className="modal-body">
                <div className="modal-body-left">
                  <label className="modal-body-label">Naziv</label>
                  <input
                    value={nazivKorisnika}
                    onChange={(e) => setNazivKorisnika(e.target.value)}
                    className="modal-body-input-korisnik"
                    type="text"
                    onInvalid={onInputRequire}
                    onInput={onInputRequire}
                    required
                  />
                  <label className="modal-body-label">Mesto</label>
                  <input
                    value={mestoKorisnika}
                    onChange={(e) => setMestoKorisnika(e.target.value)}
                    className="modal-body-input-korisnik"
                    type="text"
                    onInvalid={onInputRequire}
                    onInput={onInputRequire}
                    required
                  />
                  <label className="modal-body-label">Broj računa</label>
                  <input
                    value={racunKorisnika}
                    onChange={(e) => setRacunKorisnika(e.target.value)}
                    className="modal-body-input-korisnik-right"
                    type="text"
                    onInput={racunValidation}
                    required
                    minLength={18}
                    maxLength={18}
                  />
                  <label className="modal-body-label">Model (opciono)</label>
                  <input
                    value={modelKorisnika}
                    onChange={(e) => setModelKorisnika(e.target.value)}
                    className="modal-body-input-korisnik-right"
                    type="text"
                  />
                  <label className="modal-body-label">Poziv na broj (opciono)</label>
                  <input
                    value={pozivNaBrojKorisnika}
                    onChange={(e) => setPozivNaBrojKorisnika(e.target.value)}
                    className="modal-body-input-korisnik"
                    type="text"
                  />
                </div>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="modal-submit">
                  Kreiraj korisnika
                </button>
                <button type="button" className="modal-cancel" onClick={closeModal}>
                  Otkaži
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    );
  };
  
  export default AddOrder;*/