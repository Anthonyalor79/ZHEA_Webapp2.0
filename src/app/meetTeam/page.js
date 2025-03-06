"use client";

import React, { useEffect, useState } from 'react';
import './MeetTeam.css';
import { getMembers } from '../../utilis/api'; 
import MemberForm from './MemberForm';

function MeetTeam() {
  const [developers, setDevelopers] = useState([]);
  const [loadingStatus, setLoading] = useState(true);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getMembers();
        setDevelopers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loadingStatus) {
    return (
      <div className="container mt-5">
        <div className="loader"></div>
      </div>
      );
  }


  // ✅ If a developer is selected, show the MemberForm component
  if (selectedDeveloper) {
    return <MemberForm obj={selectedDeveloper} onClose={() => setSelectedDeveloper(null)} />;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Meet the team!</h2>
      <div className="row g-4">
        {developers.map((developer, index) => (
          <div key={index} className="col col-sm-6 col-md-4">      
              <div className="card h-100 shadow-sm card:hover"
              onClick={() => setSelectedDeveloper(developer)}>
                <div className="card-body text-center">
                  <h5 className="card-title">{developer.firstname} {developer.lastname}</h5>  {/* ✅ Corrected property access */}
                  <p className="card-text text-muted">{developer.title}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetTeam;
