import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Edit,
    Toolbar,
    Page,
    Inject,
    Filter,
    Resize
} from '@syncfusion/ej2-react-grids';
import {
    editSettings,
    IBatchChangesKorisnik,
    pageSettings,
    requiredRule,
    settings,
    toolbarOptionsWithAdd,
} from '../../gridSettings';
import '../../style/grid.css';
import { useActions } from '../../hooks/useActions';
import { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Korisnik from '../../model/Korisnik';
import NewEmployee from '../forms/NewEmployee';
import { useNotifications } from '../../hooks/useNotifications';

const Employees: React.FC = () => {
    const { vratiKorisnikePoTipu, obrisiKorisnike, azurirajKorisnike } = useActions();
    const [showMessage] = useNotifications();
    const { korisnici, error, loading } = useTypedSelector(state => state.korisnici);
    const [open, setOpen] = useState<boolean>(false);
    const grid = useRef<GridComponent>(null);

    useEffect(() => {
        vratiKorisnikePoTipu("Radnik");
    }, []);

    const clickHandler = (args: any) => {
        if (args.item.id === 'add') {
            setOpen(true);
        } 
        else if (args.item.id === 'delete') {
            let niz: number[] = [];
            if (grid.current !== null) {
                for (let i = 0; i < grid.current.getSelectedRecords().length; i++)
                    niz.push((grid.current.getSelectedRecords() as Korisnik[])[i].id);
                if(niz.length > 0)
                    obrisiKorisnike(niz);
            }
        }
        else if (args.item.id === 'update') {
            if(grid.current !== null) {
                if ((grid.current.getBatchChanges() as IBatchChangesKorisnik).changedRecords.length > 0) {
                    azurirajKorisnike((grid.current.getBatchChanges() as IBatchChangesKorisnik).changedRecords);
                } else {
                    showMessage('You need first to update some data!', 'warning');
                }
            }
        }
    }

    const closeModal = () => {
        setOpen(false);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div>
        {error ? (<div>{error}</div>) : 
            <>
                <h3>Employees</h3>
                {loading ? <div className="loader margin-top"></div> : 
                <div>
                    <div className='list-container'>
                        <GridComponent
                            dataSource={korisnici}
                            selectionSettings={settings}
                            toolbar={toolbarOptionsWithAdd}
                            allowSorting={true}
                            width={1200}
                            allowPaging={true} 
                            pageSettings={pageSettings}
                            toolbarClick={clickHandler}
                            ref={grid}
                            allowResizing={true}
                            editSettings={editSettings}
                        >
                            <ColumnsDirective>
                                <ColumnDirective type="checkbox" width="50" />
                                <ColumnDirective
                                    allowEditing
                                    validationRules={requiredRule}
                                    field="ime"
                                    headerText="Name"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing
                                    validationRules={requiredRule}
                                    field="prezime"
                                    headerText="Surname"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing={false}
                                    field="tip"
                                    headerText="Type"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing={false}
                                    field="email"
                                    headerText="Email"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing
                                    validationRules={requiredRule}
                                    field="grad"
                                    headerText="City"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing
                                    validationRules={requiredRule}
                                    field="adresa"
                                    headerText="Address"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing
                                    validationRules={requiredRule}
                                    field="brojTelefona"
                                    headerText="Phone"
                                ></ColumnDirective>
                            </ColumnsDirective>
                            <Inject services={[Page, Toolbar, Edit, Filter, Resize]} />
                        </GridComponent>
                    </div>
                    {open && <NewEmployee isOpen={open} closeModal={closeModal} handleSubmit={handleSubmit}/>}
                </div>}
            </>}
        </div>
    )
}

export default Employees;