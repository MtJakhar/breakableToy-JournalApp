import React from 'react';
import { useHistory } from 'react-router-dom';
import journalOne from '../assets/images/journalOne.png';

const Dashboard = () => {
  const history = useHistory();

  const handleImageClick = () => {
    history.push('/entries');
  };

  return (
    <div className="dashBoard">
      <div className="journalDiv">
        <p className="journalTitle">Journal Entires</p>
        <img src={journalOne} alt="journalPic" onClick={handleImageClick} />
      </div>
    </div>
  );
};

export default Dashboard;