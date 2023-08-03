import React from 'react';
import { useSelector } from 'react-redux';

const MyProfilePage = () => {
  const rockets = useSelector((state) => state.rockets);

  function rocketsList() {
    const reservedRockets = rockets.rockets.filter((rocket) => rocket.reserved === true);

    if (reservedRockets.length) {
      return reservedRockets.map((rocket, index) => (
        <tr key={rocket.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
          <td className={`px-4 py-2 ${index % 2 === 0 ? 'font-semibold' : ''}`}>
            {rocket.rocket_name}
          </td>
        </tr>
      ));
    }

    return (
      <tr>
        <td className="px-4 py-2 text-center">
          <i>No rockets reserved yet</i>
        </td>
      </tr>
    );
  }

  return (
    <section className="p-4 m-8">
      <div className="flex">
        <div className="w-1/2 pr-4">
          <div className="bg-white border border-gray-380 rounded-lg shadow-lg p-4 hover:bg-gray-200">
            <h1 className="text-2xl font-semibold mb-4">My Rockets</h1>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Rocket Name</th>
                </tr>
              </thead>
              <tbody>{rocketsList()}</tbody>
            </table>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <div className="bg-white border-gray-380 rounded-lg shadow-lg p-4 border">
            <h1 className="text-2xl font-semibold mb-4">My Rockets</h1>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">Rocket Name</th>
                </tr>
              </thead>
              <tbody>{rocketsList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfilePage;
