import React from 'react';
import './UserListItem.scss';

const UserListItem = ({ user }) => {
  const { username, profile_pic, discord_tag } = user;

  return (
    <tr className="user-list-item">
      <td className="user-list-item__username">{username}</td>
      <td className="user-list-item__profile-pic"><img src={profile_pic} alt={`${username} profile pic`} /></td>
      <td className="user-list-item__discord-tag">{discord_tag}</td>
    </tr>
  );
};

export default UserListItem;