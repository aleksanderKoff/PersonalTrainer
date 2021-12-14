import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import dayjs from 'dayjs';

function Trainingslist() { 
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetchTrainings();
    },[])

    const handleClose = () => {
        setOpen(false);
    };

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    const dayJSformatter = (params) => {
        return dayjs(params.value).format('DD/MM/YYYY hh:mm')
    }

    const deleteTraining = (params) => {
        if (window.confirm('Are you sure?')) {
            fetch(`https://customerrest.herokuapp.com/api/trainings/${params}`, { method: 'DELETE'})
            .then(response => {
                if (response.ok) {
                    setMsg('Training deleted');
                    setOpen(true);
                    fetchTrainings();
                }
                else {
                    alert('Something went wrong!');
                }
            })
            .catch((err) => console.error(err));
        }
    };

    const columns = [
        {field: 'date', sortable: true, filter: true, valueFormatter: dayJSformatter},
        {field: 'duration', sortable: true, filter: true},
        {field: 'activity', sortable: true, filter: true},
        {field: 'customer.firstname', sortable: true, filter: true},
        {field: 'customer.lastname', sortable: true, filter: true},
        {
            headerName: "",
            sortable: false,
            filter: false,
            width: 120,
            field: 'id',
            cellRendererFramework: params => (
                <Button
                    size="small"
                    color="error"
                    onClick={() => deleteTraining(params.data.id)}
                >
                Delete
                </Button>
            )
        }
    ];
    
    return(
        <div>
            <div className="ag-theme-material" style={{height: 800, width: '90%', margin:'auto'}}>
                <AgGridReact
                    rowData={trainings}
                    columnDefs={columns}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
            <Snackbar
                open={open}
                message={msg}
                autoHideDuration={3000}
                onClose={handleClose}
            />
        </div>
    );
}

export default Trainingslist;