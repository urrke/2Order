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
    IBatchChangesSto,
    pageSettings,
    requiredRule,
    settings,
    toolbarOptionsWithAdd
} from '../../gridSettings';
import '../../style/grid.css';
import { useActions } from '../../hooks/useActions';
import { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Sto from '../../model/Sto';
import NewTable from '../forms/NewTable';
import { useNotifications } from '../../hooks/useNotifications';

const Tables: React.FC = () => {
    const { vratiSveStolove, obrisiStolove } = useActions();
    const [showMessage] = useNotifications();
    const { stolovi, error, loading } = useTypedSelector(state => state.stolovi);
    const [open, setOpen] = useState<boolean>(false);
    const grid = useRef<GridComponent>(null);

    useEffect(() => {
        vratiSveStolove();
    }, []);

    const clickHandler = (args: any) => {
        if (args.item.id === 'add') {
            setOpen(true);
        } 
        else if (args.item.id === 'delete') {
            let niz: number[] = [];
            if (grid.current !== null) {
                for (let i = 0; i < grid.current.getSelectedRecords().length; i++)
                    niz.push((grid.current.getSelectedRecords() as Sto[])[i].id);
                if(niz.length > 0)
                    obrisiStolove(niz);
            }
        }
        else if (args.item.id === 'update') {
            if(grid.current !== null) {
                if ((grid.current.getBatchChanges() as IBatchChangesSto).changedRecords.length > 0) {
                    
                } else {
                    showMessage('You need first to update some data!', 'warning');
                }
            }
        }
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <div>
            {error ? (<div>{error}</div>) : 
            <>
            <h3>Tables</h3>
            {loading ? <div className="loader margin-top"></div> : 
            <div>
                <div className='list-container'>
                    <GridComponent
                        dataSource={stolovi}
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
                                field="oznaka"
                                allowEditing
                                validationRules={requiredRule}
                                headerText="Name"
                            ></ColumnDirective>
                            <ColumnDirective
                                field="brojMesta"
                                allowEditing
                                validationRules={requiredRule}
                                headerText="Number of seats"
                                type="number"
                                textAlign="Right"
                            ></ColumnDirective>
                            <ColumnDirective
                                field="konobar.ime"
                                allowEditing={false}
                                headerText="Waiter"
                            ></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[Page, Toolbar, Edit, Filter, Resize]} />
                    </GridComponent>
                </div>
                {open && <NewTable isOpen={open} closeModal={closeModal}/>}
            </div>}
            </>}
        </div>
    )
}

export default Tables;