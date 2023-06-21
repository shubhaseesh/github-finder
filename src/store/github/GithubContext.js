import React, { useReducer, createContext } from "react";
import axios from "axios";
import githubReducer from "./GithubReducer";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GithubContext = createContext();
const initialState = {
  users: [],
  isLoading: false,
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);
  // useEffect(()=>{
  //   fetchUsers()
  // }, [])
  const fetchUsers = async () => {
    setLoading()
    axios
      .get(`${GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_USERS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const setLoading = () => dispatch({
    type: 'SET_LOADING'
  })
  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
