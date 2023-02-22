import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import journalOne from '../assets/images/journalOne.png';

const Dashboard = (props) => {
  const [user, setUser] = useState({})
  const history = useHistory();

  const handleImageClick = () => {
    history.push('/entries');
  };

  const getUser = async () => {
    try {
      const userId = props.match.params.id 
      const response = await fetch(`/api/v1/users/${userId}`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const fetchedUser = await response.json()
      setUser(fetchedUser)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="dashBoard">
      <div className="journalDiv">
        <p className="journalTitle">{user.email}'s Journal Entires</p>
        <img src={journalOne} alt="journalPic" onClick={handleImageClick} />
      </div>
    </div>
  );
};

export default Dashboard;