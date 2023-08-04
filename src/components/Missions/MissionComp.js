import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookMission, cancelMission } from '../../redux/missions/missionsSlice';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  const handleJoin = (missionId) => {
    dispatch(bookMission(missionId));
  };
  const handleCancel = (missionId) => {
    dispatch(cancelMission(missionId));
  };

  return (
    <div className="bg-white border border-gray-400 rounded-lg shadow-sm">
      <div className="p-8">
        <div className="bg-white border border-white-300 rounded-lg shadow-sm ml-8 mr-8" />
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="m-6 min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-black-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-black-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-black-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-black-500 uppercase tracking-wider"
                      >
                        Join
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {missions?.map((mission, index) => (
                      <tr
                        key={mission.mission_id}
                        className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">{mission.mission_name}</div>
                          </div>
                        </td>
                        <td className="p-4 whitespace-normal" style={{ width: '40rem' }}>
                          <div className="text-sm text-gray-500">
                            {mission.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          { mission.member ? (
                            <span
                              className="px-2 inline-flex text-xs leading-5
            font-semibold rounded-full bg-green-300 text-white-800"
                            >
                              ACTIVE MEMBER
                            </span>
                          ) : (
                            <span
                              className="px-2 inline-flex text-xs leading-5
            font-semibold rounded-full bg-gray-400 text-white-800"
                            >
                              NOT A MEMBER
                            </span>
                          ) }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {mission.member ? (
                            <button
                              type="button"
                              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-4"
                              onClick={() => {
                                handleCancel(mission.mission_id);
                              }}
                            >
                              Cancel Mission
                            </button>
                          )
                            : (
                              <button
                                type="button"
                                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4"
                                onClick={() => {
                                  handleJoin(mission.mission_id);
                                }}
                              >
                                Join Mission
                              </button>
                            )}

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MissionsList;
