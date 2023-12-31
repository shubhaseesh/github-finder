import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../store/github/GithubContext";
import _ from "lodash";

const UserData = () => {
  const { users, isLoading } = useContext(GithubContext);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {_.map(users, (user) => (
          <UserItem key={_.get(user, "id")} user={user} />
        ))}
      </div>
    );
  }
};

export default UserData;
