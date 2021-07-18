import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const ScheduleForm = () => {
    const [pickTime, setPickTime] = useState({})
    console.log("state", pickTime)
    const [startDate, setStartDate] = useState(new Date());

    let finalDate = [pickTime, startDate]
    console.log("ginal", finalDate)
    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 formBox">
                <h3 className="mb-3" variant="light">Schedule your matches</h3> <br />
                <span> Pick a date :</span> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <Form>
                    <Form.Control onBlur={(e) => setPickTime({ time: e.target.value })} type="time" placeholder="pick a time" className="w-25 mt-2" />
                    <Button className="mt-4" variant="primary" > Post for a week</Button>
                </Form>

            </div>
        </div>
    );
};

export default ScheduleForm;