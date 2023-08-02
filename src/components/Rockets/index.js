import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, fetchRockets, reserveRocket } from '../../redux/rockets/rocketsSlice';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };
  const handleCancelReservation = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (

    <div className="bg-white border border-gray-400 rounded-lg shadow-sm">
      <div className="p-8">
        <div className="bg-white border border-white-300 rounded-lg shadow-sm ml-8 mr-8" />
        <h2 className="text-2xl font-semibold mb-4">Rockets List</h2>
        {rockets.length === 0 && <p>Loading...</p>}
        <div className="grid gap-4 grid-cols-1">
          {rockets.map((rocket) => (
            <div key={rocket.id} className="border rounded-lg shadow-md p-4 max-w-full">
              <div className="flex">
                <div className="rockets__list">
                  <img
                    src={rocket.flickr_images[0]}
                    alt="Rocket"
                    className="h-32 max-w-450 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="text-xl font-semibold mb-2">{rocket.rocket_name}</h2>
                  <p>
                    Type:
                    {rocket.engines.type}
                  </p>
                  <p className="text-sm mt-2 text-gray-600">
                    {rocket.reserved ? (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full mr-2">Reserved</span>
                    ) : null}
                    {rocket.description}
                  </p>
                  {rocket.reserved ? (
                    <button
                      type="button"
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                      onClick={() => {
                        handleCancelReservation(rocket.id);
                      }}
                    >
                      Cancel Reservation
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                      onClick={() => {
                        handleReserveRocket(rocket.id);
                      }}
                    >
                      Reserve Rocket
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RocketsList;
