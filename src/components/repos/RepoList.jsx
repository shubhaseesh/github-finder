import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import RepoItem from "./RepoItem";
const RepoList = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-200">
      <div className="card-body">
        <h2 className="text-3xl my-4 text-gray-700 font-bold card-title">
          Latest Repositories
        </h2>
        {_.map(repos, (repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};
RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
