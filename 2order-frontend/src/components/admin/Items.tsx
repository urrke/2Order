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
    IBatchChangesStavka,
    pageSettings,
    requiredRule,
    settings,
    toolbarOptionsWithAdd,
} from '../../gridSettings';
import '../../style/grid.css';
import { useActions } from '../../hooks/useActions';
import { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import StavkaMenija from '../../model/StavkaMenija';
import NewItem from '../forms/NewItem';
import { useNotifications } from '../../hooks/useNotifications';

const Items: React.FC = () => {
    const { vratiCeoMeni, obrisiStavkeMenija, azurirajStavkeMenija } = useActions();
    const [showMessage] = useNotifications();
    const { stavkeMenija, error, loading } = useTypedSelector(state => state.stavkeMenija);
    const [open, setOpen] = useState<boolean>(false);
    const grid = useRef<GridComponent>(null);

    useEffect(() => {
        vratiCeoMeni();
    }, []);

    const clickHandler = (args: any) => {
        if (args.item.id === 'add') {
            setOpen(true);
        } 
        else if (args.item.id === 'delete') {
            let niz: number[] = [];
            if (grid.current !== null) {
                for (let i = 0; i < grid.current.getSelectedRecords().length; i++)
                    niz.push((grid.current.getSelectedRecords() as StavkaMenija[])[i].id);
                if(niz.length > 0)
                    obrisiStavkeMenija(niz);
            }
        } 
        else if (args.item.id === 'update') {
            if(grid.current !== null) {
                if ((grid.current.getBatchChanges() as IBatchChangesStavka).changedRecords.length > 0) {
                    azurirajStavkeMenija((grid.current.getBatchChanges() as IBatchChangesStavka).changedRecords);
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
                <h3>Items</h3>
                {loading ? <div className="loader margin-top"></div> : 
                <div>
                    <div className='list-container'>
                        <GridComponent
                            dataSource={stavkeMenija}
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
                                    field="naziv"
                                    headerText="Name"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing={false}
                                    field="tip"
                                    headerText="Type"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing
                                    validationRules={requiredRule}
                                    field="grupa"
                                    headerText="Group"
                                ></ColumnDirective>
                                <ColumnDirective
                                    allowEditing
                                    validationRules={requiredRule}
                                    field="cena"
                                    headerText="Price"
                                    type="number"
                                    format='n2'
                                    textAlign="Right"
                                ></ColumnDirective>
                            </ColumnsDirective>
                            <Inject services={[Page, Toolbar, Edit, Filter, Resize]} />
                        </GridComponent>
                    </div>
                    {open && <NewItem isOpen={open} closeModal={closeModal} handleSubmit={handleSubmit}/>}
                </div>}
            </>}
        </div>
    )
}

export default Items;