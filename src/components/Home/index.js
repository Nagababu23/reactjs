import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import MatchCard from '../MatchCard'; // Assuming MatchCard component exists
import './index.css';

function Home() {
  const [teamDataList, setTeamDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visitedTeamMatches, setVisitedTeamMatches] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://apis.ccbp.in/ipl');
        const data = await result.json();
        const teamData = data.teams.map(each => ({
          id: each.id,
          name: each.id, // Assuming name is also available in data
          teamImageUrl: each.team_image_url,
        }));
        setTeamDataList(teamData);
        setIsLoading(false);
        setVisitedTeamMatches(true); // Set visited flag after successful fetch
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false even on error
      }
    };

    fetchData();
  }, []); // Empty dependency array for effect to run only once

  return (
    <div>
      <div className="dashboard">
        <div className="ipl-head">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            width="30px"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        ) : (
          <ul>
            {teamDataList.length > 0 ? (
              teamDataList.map(each => (
                <MatchCard details={each} key={each.id} />
              ))
            ) : (
              <p>No team data found.</p>
            )}
          </ul>
        )}
        {visitedTeamMatches && (
          <p>You recently visited the Team Matches route.</p>
        )}
      </div>
    </div>
  );
}
export default Home