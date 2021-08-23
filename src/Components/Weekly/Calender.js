import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import{ maxDate, minDate,} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Calender = () => {
    const [value, onChange] = useState(new Date());
    const maxDate = new Date("7/31/2020") ;
    const minDate = new Date("7/27/2020") ; 
    return (
        <div>
            <Calendar 
                maxDate= {maxDate}
                minDate= {minDate}
                onChange={onChange}
                value={value}
            />
            {console.log(value)}
        </div>
    )
}
export default Calender;