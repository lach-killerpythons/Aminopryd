import React from 'react';
import './ProfileCardList.css';

const ProfileCardList = ({ profiles, columns }) => {
  return (
    <div className="profile-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {profiles.map((profile, index) => (
        <div className="profile-card" key={index}>
          <div className="profile-name">{profile.name}</div>
          <div className="profile-username">@{profile.username}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCardList;
