import _ from "lodash";
import React, { useContext, useState } from "react";
import GithubContext from "../../store/github/GithubContext";
import AlertContext from "../../store/alert/AlertContext";
import { searchUsers } from "../../store/github/GithubActions";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (_.isEqual(_.size(_.trim(text)), 0) || _.isEqual(text, "")) {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const items = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: items });
      setText("");
    }
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  }
  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2
    lg:grid-cols-3 md:grid-cols-2 mb-8 gap-8"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black placeholder-gray-700"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {_.size(users) > 0 && (
        <div>
          <button onClick={reset} className="btn btn-outline btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
