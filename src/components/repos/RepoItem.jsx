import React from "react";
import {
  FaEye,
  FaInfo,
  FaLink,
  FaStar,
  FaUtensils,
} from "react-icons/fa";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-white hover:bg-gray-200">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold text-blue-600">
          <a href={html_url} rel="noreferrer">
            <FaLink className="inline mr-1" />
            {name}
          </a>
          <p className="mb-3 text-gray-600">{description}</p>
          <div>
            <div className="mr-2 badge badge-info badge-lg">
              <FaEye className="mr-2" />
              {watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
              <FaStar className="mr-2" />
              {forks}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
              <FaInfo className="mr-2" />
              {open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
              <FaUtensils className="mr-2" />
              {stargazers_count}
            </div>
          </div>
        </h3>
      </div>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
