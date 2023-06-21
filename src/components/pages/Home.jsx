import React from "react";
import UserData from "../users/UserData";
import UserSearch from "../users/UserSearch";

const Home = () => {
  return (
    <div>
      <UserSearch />
      <UserData />
    </div>
  );
};

export default Home;
