import React, { useContext } from "react";
import { UserContext } from "../../App";
import Menubar from '../shared/Menubar/Menubar';
import ScheduleList from './ScheduleList';

const Schedule = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Menubar />
            <ScheduleList user={loggedInUser} />
        </div>
    )
}
export default Schedule;