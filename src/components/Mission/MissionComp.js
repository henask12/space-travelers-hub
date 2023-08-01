import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MissionsList = () => {
    debugger;
    const dispatch = useDispatch();
    const missions = useSelector((state) => state.missions.missions);

    console.log(missions);

    useEffect(() => {
        debugger;
        dispatch(fetchMissions());
    }, [dispatch]);

    return (
        <div>
            <h2>Missions Lists</h2>
            <ul>
                {missions?.map((mission) => (
                    <li key={mission.id}>
                        <h2>{mission.country}</h2>
                        <p>{mission.type}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissionsList;
