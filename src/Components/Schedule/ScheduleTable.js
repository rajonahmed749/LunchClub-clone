import React from 'react';
import { Table } from "react-bootstrap"

const ScheduleTable = ({ schedule }) => {

    return (
        <div className="mt-5">
            <h4>All Schedule : </h4>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        schedule.map(info => {
                            return (
                                <tr key={info._id}>
                                    <td> <img src={info.userPhoto} alt="user" style={{ width: "45px", height: "45px", borderRadius: "50%" }} /> </td>
                                    <td>{info.date}</td>
                                    <td>{info.time.slice(0, 10)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ScheduleTable;