import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  try {
    const {
      data: { items },
      status,
    } = await axios.get(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (status !== 200 || items.length === 0) {
      window.location = "not-found";
    }
    return items;
  } catch (error) {
    console.error(error);
  }
};
