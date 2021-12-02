import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    CommandColumn,
    Edit,
    Toolbar,
    Page,
    Inject,
    CommandModel,
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
import ReviewDetails from '../forms/ReviewDetails';
import Recenzija from '../../model/Recenzija';

const ReviewsList: React.FC = () => {
    const { vratiRecenzijeKorisnika, obrisiRecenzije } = useActions();
    const { recenzije, loading, error } = useTypedSelector(state => state.recenzije);
    const { data } = useTypedSelector(state => state.auth);
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const commands: CommandModel[] = [{ buttonOption: { content: 'Details', click: () => {onClick();}}}];
    const grid = useRef<GridComponent>(null);

    useEffect(() => {
        
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

    const onClick = () => {
        setOpenDetails(true);
        console.log('uros');
    }

    const closeModal = () => {
        setOpenDetails(false);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeModal();
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
                        allowPaging={true}
                        pageSettings={pageSettings}
                        width={1200}
                        allowResizing={true}
                        toolbarClick={clickHandler}
                        ref={grid}
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
            {openDetails && <ReviewDetails isOpen={openDetails} closeModal={closeModal} handleSubmit={handleSubmit}/>}
        </div>
    )
}

export default ReviewsList;