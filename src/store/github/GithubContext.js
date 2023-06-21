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
        const { items } = res.data;
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
  const reset = () =>{
    dispatch({
      type: 'RESET'
    })
  }
  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, searchUsers, reset }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
