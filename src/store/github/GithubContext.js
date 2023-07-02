import React, { useReducer, createContext } from "react";
import axios from "axios";
import githubReducer from "./GithubReducer";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GithubContext = createContext();


export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
    user: {},
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });
  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };
  // Get sigle user
  const getUser = async (login) => {
    axios
      .get(`${GITHUB_URL}/users/${login}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        const { data } = res;
        dispatch({
          type: "GET_USER",
          payload: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // Get repos
  // login is the username
  const getRepos = async (login) => {
    setLoading()
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })
    axios
      .get(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_REPOS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        getRepos,
        reset,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
