/**
 * githubService.js
 * Handles all interactions with the GitHub REST API.
 */

const BASE_URL = 'https://api.github.com/users';

/**
 * Fetches comprehensive profile and repository data for a GitHub user.
 * @param {string} username - The GitHub handle to search for.
 * @returns {Promise<Object>} Object containing user profile and top repos.
 */
export const getGitHubProfile = async (username) => {
  try {
    // 1. Fetch User Profile Data
    const userResponse = await fetch(`${BASE_URL}/${username}`);
    
    if (!userResponse.ok) {
      if (userResponse.status === 404) {
        throw new Error('User not found. Please check the spelling.');
      }
      throw new Error('An error occurred while fetching user data.');
    }
    
    const profile = await userResponse.json();

    // 2. Fetch User's Repositories (Sorted by recent updates)
    const repoResponse = await fetch(`${BASE_URL}/${username}/repos?sort=updated&per_page=4`);
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  } catch (error) {
    console.error("GitHub Service Error:", error.message);
    throw error;
  }
};