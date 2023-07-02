import React, { useReducer, createContext } from "react";
import axios from "axios";
import githubReducer from "./GithubReducer";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GithubContext = createContext();
const initialState = {
  users: [],
  isLoading: false,
  user: {},
  repos: [],
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);
  // Search users
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    axios
      .get(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        const {
          data: { items },
          status,
        } = res;
        if (status !== 200 || items.length === 0) {
          window.location = "not-found";
        }
        dispatch({
          type: "GET_USERS",
          payload: items,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
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
        users: state.users,
        isLoading: state.isLoading,
        user: state.user,
        repos: state.repos,
        getRepos,
        searchUsers,
        reset,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
