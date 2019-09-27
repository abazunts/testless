import React from 'react';
import {NavLink} from "react-router-dom";


const InspectionInfo = (props) => {
    return <div>
        <NavLink to={'/inspections'}>Back list</NavLink>
        {props.id}
    </div>
};

export default InspectionInfo;