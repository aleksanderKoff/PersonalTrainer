import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Trainingslist() { 
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    },[])

    const columns = [
        {field: 'date', sortable: true, filter: true},
        {field: 'duration', sortable: true, filter: true},
        {field: 'activity', sortable: true, filter: true},
        {field: 'customer.firstname', sortable: true, filter: true},
        {field: 'customer.lastname', sortable: true, filter: true},
        

    ]
    
    return(
        <div className="ag-theme-material" style={{height: 800, width: '90%', margin:'auto'}}>
            <AgGridReact
                rowData={trainings}
                columnDefs={columns}
                pagination={true}
                paginationPageSize={10}
            />
        </div>
    );

}

export default Trainingslist;