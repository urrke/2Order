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
    pageSettings,
    settings,
    toolbarOptions,
} from '../../gridSettings';
import '../../style/grid.css';
import { useActions } from '../../hooks/useActions';
import { useEffect, useRef } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Korisnik from '../../model/Korisnik';

const Users: React.FC = () => {
    const { vratiSveKorisnike, obrisiKorisnike } = useActions();
    const { korisnici, error, loading } = useTypedSelector(state => state.korisnici);
    const grid = useRef<GridComponent>(null);

    useEffect(() => {
        vratiSveKorisnike();
    }, []);

    const clickHandler = (args: any) => {
        if (args.item.id === 'delete') {
            let niz: number[] = [];
            if (grid.current !== null) {
                for (let i = 0; i < grid.current.getSelectedRecords().length; i++)
                    niz.push((grid.current.getSelectedRecords() as Korisnik[])[i].id);
                if(niz.length > 0)
                    obrisiKorisnike(niz);
            }
        } 
    }

    return (
        <div>
            {error ? (<div>{error}</div>) : 
            <>
                <h3>Users</h3>
                {loading ? <div className="loader margin-top"></div> : 
                <div>
                    <div className='list-container'>
                        <GridComponent
                            ref={grid}
                            dataSource={korisnici}
                            selectionSettings={settings}
                            toolbar={toolbarOptions}
                            toolbarClick={clickHandler}
                            allowSorting={true}
                            width={1200}
                            allowPaging={true} 
                            pageSettings={pageSettings}
                            allowResizing={true}
                        >
                            <ColumnsDirective>
                                <ColumnDirective type="checkbox" width="50" />
                                <ColumnDirective
                                    field="ime"
                                    headerText="Name"
                                ></ColumnDirective>
                                <ColumnDirective
                                    field="prezime"
                                    headerText="Surname"
                                ></ColumnDirective>
                                <ColumnDirective
                                    field="tip"
                                    headerText="Type"
                                ></ColumnDirective>
                                <ColumnDirective
                                    field="email"
                                    headerText="Email"
                                ></ColumnDirective>
                                <ColumnDirective
                                    field="grad"
                                    headerText="City"
                                ></ColumnDirective>
                                <ColumnDirective
                                    field="adresa"
                                    headerText="Address"
                                ></ColumnDirective>
                                <ColumnDirective
                                    field="brojTelefona"
                                    headerText="Phone"
                                ></ColumnDirective>
                            </ColumnsDirective>
                            <Inject services={[Page, Toolbar, Edit, Filter, Resize]} />
                        </GridComponent>
                    </div>
                </div>}
            </>}
        </div>
    )
}

export default Users;