import axios from "axios";
import React, { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    axios
      .get(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        // console.log(res.data[0]);
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default UserList;
