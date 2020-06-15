import React from "react";
import UserProfiles from "./UserProfiles";
import spinner from "../layouts/spinner";
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
  if (loading) {
    return spinner;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserProfiles key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired 

}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
