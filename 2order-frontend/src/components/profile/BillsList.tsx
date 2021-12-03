import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Edit,
    Toolbar,
    Page,
    Inject,
    Filter,
    CommandColumn,
    CommandModel,
    Resize,
    CommandClickEventArgs
} from '@syncfusion/ej2-react-grids';
import {
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
import NewReview from '../forms/NewReview';

const BillsList: React.FC = () => {
    const { obrisiRacune, vratiRacuneKorisnika } = useActions();
    const { racuni, loading, error } = useTypedSelector(state => state.racuni);
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [openReview, setOpenReview] = useState<boolean>(false);
    const [racunId, setRacunId] = useState<number>(0);
    const commands: CommandModel[] = [{ buttonOption: { content: 'Details' }}, { buttonOption: { content: 'Review' }}];
    const grid = useRef<GridComponent>(null);
    const { data } = useTypedSelector(state => state.auth);

    useEffect(() => {
        if(data) {
            vratiRacuneKorisnika(data.korisnik.id);
        }
    }, [])

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

    const onCommandClick = (arg: CommandClickEventArgs | undefined) => {
        if(arg === undefined)
            return;
        else if (arg.commandColumn?.buttonOption?.content === 'Details'){
            var racun = arg.rowData as Racun;
            setRacunId(racun.id);
            setOpenDetails(true);
        }
        else if (arg.commandColumn?.buttonOption?.content === 'Review') {
            var racun = arg.rowData as Racun;
            setRacunId(racun.id);
            setOpenReview(true);
        }
    }

    const closeModal = () => {
        if(openDetails)
            setOpenDetails(false);
        else 
            setOpenReview(false);
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
                        commandClick={onCommandClick}
                        toolbarClick={clickHandler}
                        ref={grid}
                    >
                        <ColumnsDirective>
                            <ColumnDirective type="checkbox" width="50" />
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
                {openDetails && <BillDetails isOpen={openDetails} closeModal={closeModal} racunId={racunId}/>}
                {openReview && <NewReview isOpen={openReview} closeModal={closeModal} racunId={racunId}/>}
            </div>}
            </>}
        </div>
    )
}

export default BillsList;