import { useEffect, useState } from "react";
import React from 'react';  
import * as signalR from '@microsoft/signalr';

const Messages: React.FC = () => {
    const [userID, setUserID] = useState<number>(0);
    const [table, setTable] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [connection, setConnection] = useState<signalR.HubConnection>();

    useEffect(() => {
        var conn = new signalR.HubConnectionBuilder().withUrl("https://localhost:44382/NotificationHub").build();
        setConnection(conn);
        if(conn !== undefined) {
            conn.start();
            conn.on("sendOrderToUser", name => 
            {
                console.log("aaaa");
            });
        }
    }, [])

    const onChangeTable = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTable(e.target.value);
        connection && connection.invoke("DodajKorisnikaZaSto", e.target.value);
    }

    const onAddMenuItem = () => {
        connection && connection.invoke("PosaljiPorudzbinu", name, table);
    }

    return (
        <div className="App">
            <label>User id:</label>
            <input type="text" onChange={(e) => setUserID(parseInt(e.target.value))} placeholder="Enter your id"></input>
            <label>Pick your table:</label>
            <select onChange={onChangeTable}>
                <option value="1">Table1</option>
                <option value="2">Table2</option>
                <option value="3">Table3</option>
                <option value="4">Table4</option>
            </select>
            <label>Naziv:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name"></input>
            <label>Cena:</label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Enter price"></input>
            <button onClick={onAddMenuItem}>Send</button>
        </div>
    )
}

export default Messages;