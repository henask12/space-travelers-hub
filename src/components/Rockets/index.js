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
            <h2 className="text-2xl font-semibold mb-4">Rockets List</h2>
            {rockets.length === 0 && <p>Loading...</p>}
            <div className="grid gap-4 grid-cols-1">
                {rockets.map((rocket) => (
                    <div key={rocket.id} className="border rounded-lg shadow-md p-4 w-full">
                        <div className="flex">
                            <div>
                                <img
                                    src={rocket.flickr_images[0]}
                                    alt="Rocket"
                                    className="h-32 w-350 object-cover rounded-lg mb-2"
                                />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-semibold mb-2">{rocket.rocket_name}</h2>
                                <p>Type: {rocket.engines.type}</p>
                                <p className="text-sm mt-2 text-gray-600">{rocket.description}</p>
                                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                    Reserve Rocket
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RocketsList;
