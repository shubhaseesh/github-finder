import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  try {
    const {
      data: { items },
      status,
    } = await github.get(`/search/users?${params}`);
    if (status !== 200 || items.length === 0) {
      window.location = "not-found";
    }
    return items;
  } catch (error) {
    console.error(error);
  }
};

// Get user and repos
// Parameter login is username
export const getUserAndRepos = async (login) => {
  try {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
    ]);
    return [{ user: user.data, repos: repos.data }];
  } catch (error) {
    console.error(error);
  }
};
