import React, { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import ScheduleTable from './ScheduleTable';

const ScheduleList = ({ user }) => {

    const [schedule, setSchedule] = useState([])
    useEffect(() => {
        fetch("https://secure-dusk-66270.herokuapp.com/scheduleList")
            .then(res => res.json())
            .then(data => {
                setSchedule(data)
                if (data) {
                    document.getElementById('preloader').style.display = 'none'
                }
            })
    }, [])
    return (
        <div>
            <Spinner animation="grow" variant="danger" id="preloader" />
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <img src={user.img} alt="user" className="user" />
                    <span className="scheduleCard">  total meetings : {schedule.length} </span>
                    <span className="scheduleCard">  Week strek: 0 </span>
                    <h4>{user.name}</h4>
                    <ScheduleTable schedule={schedule} />
                </div>
            </div>
        </div>
    )
}
export default ScheduleList;