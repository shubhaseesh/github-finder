import React from "react";
import { useContext, useEffect } from "react";
import GithubContext from "../../store/github/GithubContext";
import { useParams } from "react-router-dom";
const User = () => {
  const params = useParams();
  const { user, getUser } = useContext(GithubContext);
  useEffect(() => {
    getUser(params.login);
  }, [params.login]);
  return <div>{JSON.stringify(user)}</div>;
};

export default User;
