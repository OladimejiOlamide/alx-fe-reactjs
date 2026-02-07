import axios from 'axios';

/**
 * Service to handle GitHub API interactions.
 * Note: If you run into rate limits, you can add a Personal Access Token.
 */
const GITHUB_TOKEN = ""; // You can add a token here if needed

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    ...(GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {}),
  },
});

export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get(`/search/users`, {
      params: { q: query }
    });
    return response.data.items;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error("API rate limit exceeded. Please wait a moment.");
    }
    throw new Error("Failed to fetch users from GitHub.");
  }
};