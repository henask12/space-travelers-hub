import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "../../redux/rockets/rocketsSlice";

const RocketsList = () => {
    debugger;
    const dispatch = useDispatch();
    const rockets = useSelector((state) => state.rockets.rockets);

    console.log(rockets);

    useEffect(() => {
        debugger;
        dispatch(fetchRockets());
    }, [dispatch]);

    return (
        <div>
            <h2>Rockets Lists</h2>
            <ul>
                {rockets?.map((rocket) => (
                    <li key={rocket.id}>
                        <h2>{rocket.country}</h2>
                        <p>{rocket.type}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RocketsList;
