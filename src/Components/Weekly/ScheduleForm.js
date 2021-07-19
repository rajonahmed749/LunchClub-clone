import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../../App";
const ScheduleForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [pickTime, setPickTime] = useState({})
    console.log("state", pickTime)
    const [startDate, setStartDate] = useState(new Date());


    let submitSchedule = {
        user: loggedInUser.name,
        userPhoto: loggedInUser.img,
        date: pickTime.time,
        time: startDate
    }
    console.log(submitSchedule)

    const handleSubmit = () => {
        const url = `https://secure-dusk-66270.herokuapp.com/postSchedule`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submitSchedule),
        })
            .then(res => {
                alert("addedd correctly");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 formBox">
                <h3 className="mb-3" variant="light">Schedule your matches</h3> <br />
                <span> Pick a date :</span> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <Form>
                    <Form.Control onBlur={(e) => setPickTime({ time: e.target.value })} type="time" placeholder="pick a time" className="w-25 mt-2" />
                    <Button onClick={handleSubmit} className="mt-4" variant="primary" > Post for a week</Button>
                </Form>
            </div>
        </div>
    );
};

export default ScheduleForm;