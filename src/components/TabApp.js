import React, { useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Customerlist from './Customerlist';
import Trainingslist from './Trainingslist';
import Calendar from './Calendar';

function TabApp() {

    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="Customers" />
                <Tab value="two" label="Trainings" />
                <Tab value="three" label="Calendar" />
                <Tab value="four" label="?" />
            </Tabs>
            {value === 'one' && <Customerlist/>}
            {value === 'two' && <Trainingslist/>}
            {value === 'three' && <Calendar/>}
        </div>
    );
}
    
export default TabApp;