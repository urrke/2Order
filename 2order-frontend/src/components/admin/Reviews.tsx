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
    Resize,
    CommandClickEventArgs
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
import ReviewDetails from '../forms/ReviewDetails';
import Recenzija from '../../model/Recenzija';

const Reviews: React.FC = () => {
    const { vratiSveRecenzije, obrisiRecenzije } = useActions();
    const { recenzije, loading, error } = useTypedSelector(state => state.recenzije);
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [recenzijaId, setRecenzijaId] = useState<number>(0);
    const commands: CommandModel[] = [{ buttonOption: { content: 'Details' }}];
    const grid = useRef<GridComponent>(null);

    useEffect(() => {
        vratiSveRecenzije();
    }, []);

    const clickHandler = (args: any) => {
        if (args.item.id === 'delete') {
            let niz: number[] = [];
            if (grid.current !== null) {
                for (let i = 0; i < grid.current.getSelectedRecords().length; i++)
                    niz.push((grid.current.getSelectedRecords() as Recenzija[])[i].id);
                if(niz.length > 0)
                    obrisiRecenzije(niz);
            }
        } 
    }

    const closeModal = () => {
        setOpenDetails(false);
    }

    const onCommandClick = (arg: CommandClickEventArgs | undefined) => {
        if(arg === undefined)
            return;
        else {
            var recenzija = arg.rowData as Recenzija;
            setRecenzijaId(recenzija.id);
            setOpenDetails(true);
        }
    }

    return (
        <div>
            {error ? (<div>{error}</div>) : 
            <>
            <h3>Reviews</h3>
            {loading ? <div className="loader margin-top"></div> : 
            <div>
                <div className='list-container'>
                    <GridComponent
                        dataSource={recenzije}
                        selectionSettings={settings}
                        toolbar={toolbarOptions}
                        editSettings={editSettings}
                        allowSorting={true}
                        allowPaging={true}
                        pageSettings={pageSettings}
                        width={1200}
                        commandClick={onCommandClick}
                        toolbarClick={clickHandler}
                        ref={grid}
                        allowResizing={true}
                    >
                        <ColumnsDirective>
                            <ColumnDirective type="checkbox" width="50" />
                            
                            <ColumnDirective
                                field="komentar"
                                headerText="Comment"
                            ></ColumnDirective>
                            <ColumnDirective
                                field="ocena"
                                headerText="Rating"
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
                        <Inject services={[Page, Toolbar, Edit, CommandColumn, Resize]} />
                    </GridComponent>
                </div>
            </div>}
            </>}
            {openDetails && <ReviewDetails isOpen={openDetails} closeModal={closeModal} recenzijaId={recenzijaId}/>}
        </div>
    )
}

export default Reviews;