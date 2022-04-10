import React from "react";
import { useParams } from "react-router-dom";

const List= () => {
    const {title} = useParams();
    const {prob} = useParams();
    return (
        <React.Fragment>
            <h1>the Problem({prob}) has been submitted to your nearest relevent NGO in your city</h1>
        </React.Fragment>
    )
}

export default List;