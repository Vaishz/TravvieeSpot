import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HolidayPack = () => {
  const [userData, setUserData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    params: {
      page: '0',
      per_page: '25',
    },
    headers: {
      'X-RapidAPI-Key': '47b6ef6d4dmsh52365304ae1b633p171b3cjsn13e9575cd280',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setUserData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {userData.map((player) => (
        <div key={player.id} className="bg-white rounded-md overflow-hidden shadow-lg">
          <img
            className="w-full h-32 object-cover object-center"
            src="https://via.placeholder.com/300"  
            alt={`${player.first_name} ${player.last_name}`}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{`${player.first_name} ${player.last_name}`}</div>
            <p className="text-gray-700 text-base">ID: {player.id}</p>
            <p className="text-gray-700 text-base">Position: {player.position}</p>
            <p className="text-gray-700 text-base">Team: {player.team ? player.team.full_name : 'N/A'}</p>
            <p className="text-gray-700 text-base">Height: {player.height_feet}' {player.height_inches}"</p>
            <p className="text-gray-700 text-base">Weight: {player.weight_pounds ? `${player.weight_pounds} lbs` : 'N/A'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HolidayPack;
