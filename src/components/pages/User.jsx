import React from "react";
import { useContext, useEffect } from "react";
import GithubContext from "../../store/github/GithubContext";
import { useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { FaCodepen, FaStore, FaUsers } from "react-icons/fa";
const User = () => {
  const params = useParams();
  const {
    user: {
      login,
      id,
      node_id,
      avatar_url,
      gravatar_id,
      html_url,
      followers_url,
      following_url,
      gist_url,
      starred_url,
      subscription_url,
      organizations_url,
      repos_url,
      events_url,
      type,
      name,
      company,
      blog,
      location,
      email,
      bio,
      hirable,
      twitter_username,
      public_repos,
      public_gists,
      followers,
      following,
    },
    getUser,
    isLoading,
  } = useContext(GithubContext);
  useEffect(() => {
    getUser(params.login);
  }, [params.login]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-outline">
            Back To Search
          </Link>
        </div>
        <div
          className="grid grid-cols-1 xl:grid-cols-3 
          lg:grid-cols-3 md:grid-cols-2 mb-8 md:gap-8"
        >
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end mb-0">
                <div className="flex flex-col text-xl text-slate-50">
                  <h2 className="card-title mb-0">{name}</h2>
                  <p>{login}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hirable && (
                  <div className="mx-1 badge badge-info">Hirable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  className="btn btn-outline"
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat flex items-center">
                  <CiLocationOn />
                  <p className="stat-title">{location}</p>
                </div>
              )}

              {blog && (
                <div className="stat">
                  <div className="stat flex items-center">
                    <CgWebsite />
                    <a className="stat-title" href={blog}>
                      Blog
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat flex items-center">
                    <CiTwitter />
                    <a
                      href={`htpps://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full mb-6 rounded-lg shadow-md stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
