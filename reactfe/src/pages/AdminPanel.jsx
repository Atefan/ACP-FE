import React, { useState } from 'react';

const AdminPanel = () => {
  const [showCreateUser, setCreateUser] = useState(false);
  const [showCreateTeam, setCreateTeam] = useState(false);
  const [showAssignUserToTeam, setAssignUserToTeam] = useState(false);
  const [showPeriod, setPeriod] = useState(false);

  const roles = ['Manager', 'Leader', 'Employee', 'Admin'];

  const handleButtonCreateUser = () => {
    setCreateUser(!showCreateUser);
    setCreateTeam(false);
    setAssignUserToTeam(false);
    setPeriod(false);
  };

  const handleButtonCreateTeam = () => {
    setCreateTeam(!showCreateTeam);
    setCreateUser(false);
    setAssignUserToTeam(false);
    setPeriod(false);
  };

  const handleAssignUserToTeam = () => {
    setAssignUserToTeam(!showAssignUserToTeam);
    setCreateUser(false);
    setCreateTeam(false);
    setPeriod(false);
  };

  const handlePeriod = () => {
    setPeriod(!showPeriod);
    setCreateUser(false);
    setCreateTeam(false);
    setAssignUserToTeam(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-12 shadow-md rounded-md">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"><span className="text-blue-800 dark:text-blue-500">{"{"}app{"}"}</span>olica Admin Panel</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleButtonCreateUser}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
          >
            Create User
          </button>
          {showCreateUser && (
            <ul className="rounded mt-2">
              <input
                placeholder="Enter name"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/2 border border-blue-300"
              />
              <input
                placeholder="Enter email"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/2 border border-blue-300"
              />
              <input
                placeholder="Enter password"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/2 border border-blue-300"
              />
              <select className="py-2 px-4 w-1/2 border border-blue-300">
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <div className="w-1/2"></div>
              <div className="flex justify-end">
                <button
                  onClick={() => console.log('You created user!')}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3 bottom-0 right-0"
                >
                  Create record
                </button>
              </div>
            </ul>
          )}
          <button
            onClick={handleButtonCreateTeam}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
          >
            Create Team
          </button>
          {showCreateTeam && (
            <ul className="bg-blue-100 border border-blue-300 rounded mt-2">
              <input
                placeholder="Enter Leader"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/3 border border-blue-300"
              />
              <input
                placeholder="Enter Team Name"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/3 border border-blue-300"
              />
              <button
                onClick={() => console.log('You created Team!')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3"
              >
                Create record
              </button>
            </ul>
          )}

          <button
            onClick={handleAssignUserToTeam}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
          >
            Assign User To Team
          </button>
          {showAssignUserToTeam && (
            <ul className="bg-blue-100 border border-blue-300 rounded mt-2">
              <input
                placeholder="Enter Team"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/3 border border-blue-300"
              />
              <input
                placeholder="Enter User"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/3 border border-blue-300"
              />
              <button
                onClick={() => console.log('You Assign User!')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3"
              >
                Create record
              </button>
            </ul>
          )}

          <button
            onClick={handlePeriod}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded"
          >
            Create Period
          </button>
          {showPeriod && (
            <ul className="bg-blue-100 border border-blue-300 rounded mt-2">
              <input
                placeholder="Enter Start Date"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/3 border border-blue-300"
              />
              <input
                placeholder="Enter End Date"
                className="py-2 px-4 hover:bg-gray-300 cursor-pointer w-1/3 border border-blue-300"
              />
              <button
                onClick={() => console.log('You Enter Period!')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3"
              >
                Create record
              </button>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;