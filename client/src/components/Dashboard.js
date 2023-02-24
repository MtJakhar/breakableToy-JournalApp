import React from 'react';
import { useHistory } from 'react-router-dom';
import StoicQuote from '../components/StoicQuote';
import journalOne from '../assets/images/journalOne.png';

const Dashboard = (props) => {

  const history = useHistory();

  const handleImageClick = () => {
    history.push('/entries');
  };

  return (
    <div className="dashBoard">
      <div className='quoteHeader'>
        <StoicQuote />
      </div>
      <div className="journalDiv">
        <p className="journalTitle"> Journal Entries</p>
        <img src={journalOne} alt="journalPic" onClick={handleImageClick} />
      </div>
    </div>
  );
};

export default Dashboard;

