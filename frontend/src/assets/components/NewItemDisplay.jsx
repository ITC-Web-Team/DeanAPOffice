import React from "react";

export default function ItemDisplay(){
    return(
        <div className="item-container">
            <div className="id boxes">ID</div>
            <div className="roll boxes">Roll Number</div>
            <div className="date boxes">Date</div>
            <div className="name boxes">Name</div>
            <div className="department boxes">Department</div>
            <div className="subject boxes">Subject</div>
            <div className="remarks boxes">Remarks</div>
            <div className="application-document boxes">Type</div>
        </div>
    );
}