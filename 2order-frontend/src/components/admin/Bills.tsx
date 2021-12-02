import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Edit,
    Toolbar,
    Page,
    Inject,
    Filter,
    CommandModel,
    CommandColumn,
    Resize
} from '@syncfusion/ej2-react-grids';
import {
    editSettings,
    pageSettings,
    settings,
    toolbarOptions,
} from '../../gridSettings';
import '../../style/grid.css';
import { useActions } from '../../hooks/useActions';
import { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import BillDetails from '../forms/BillDetails';
import Racun from '../../model/Racun';

const Bills: React.FC = () => {
    const { vratiSveRacune, obrisiRacune } = useActions();
    const { racuni, error, loading } = useTypedSelector(state => state.racuni);
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    let open: boolean = false;
    const commands: CommandModel[] = [{ buttonOption: { content: 'Details', click: () => {onClick();}}}];
    const grid = useRef<GridComponent>(null);

    useEffect(() => {
        vratiSveRacune();
    }, []);

    const clickHandler = (args: any) => {
        if (args.item.id === 'delete') {
            let niz: number[] = [];
            if (grid.current !== null) {
                for (let i = 0; i < grid.current.getSelectedRecords().length; i++)
                    niz.push((grid.current.getSelectedRecords() as Racun[])[i].id);
                if(niz.length > 0)
                    obrisiRacune(niz);
            }
        } 
    }

    const onClick = () => {
        open = true;
        console.log('uros');
    }

    const closeModal = () => {
        open = false;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <div>
            {error ? (<div>{error}</div>) : 
            <>
            <h3>Bills</h3>
            {loading ? <div className="loader margin-top"></div> : 
            <div>
                <div className='list-container'>
                    <GridComponent
                        dataSource={racuni}
                        selectionSettings={settings}
                        toolbar={toolbarOptions}
                        allowSorting={true}
                        width={1200}
                        allowPaging={true} 
                        pageSettings={pageSettings}
                        allowResizing={true}
                        toolbarClick={clickHandler}
                        ref={grid}
                    >
                        <ColumnsDirective>
                            <ColumnDirective type="checkbox" width="50" />
                            <ColumnDirective
                                field="tip"
                                headerText="Type"
                            ></ColumnDirective>
                            <ColumnDirective
                                field="iznos"
                                headerText="Total"
                                type="number"
                                format='n2'
                                textAlign="Right"
                            ></ColumnDirective>
                            <ColumnDirective
                                field="vreme"
                                headerText="Date"
                                type="date"
                                format={{ type: 'date', format: 'dd.MM.yyyy.' }}
                            ></ColumnDirective>
                            <ColumnDirective 
                                headerText='Commands' 
                                textAlign="Center" 
                                commands= {commands}
                            ></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[Page, Toolbar, Edit, Filter, CommandColumn, Resize]} />
                    </GridComponent>
                </div>
                {open && <BillDetails isOpen={open} closeModal={closeModal} handleSubmit={handleSubmit}/>}
            </div>}
            </>}
        </div>
    )
}

export default Bills;