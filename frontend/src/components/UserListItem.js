import React from "react";

function UserListItem({ user }) {
  return (
    <div className="user-list-item">
      <img className="profile-pic" src={user.profile_pic} alt={`${user.username}'s profile pic`} />
      <div className="username">{user.username}</div>
      <div className="discord-tag">{user.discord_tag}</div>
    </div>
  );
}

export default UserListItem;