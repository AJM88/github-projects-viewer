import axios from 'axios'

export function getGithubRepos(organization, page) {
  return axios.get(`https://api.github.com/users/${organization}/repos?per_page=100&type=owner&page=${page}&client_id=97cb8b36e0795e1c7f16&client_secret=99178ca0186c6ce3bb2b2ef1cfba04468c81fbc0`);
}

export function getGithubRepoDetails(owner, repo, detail, page) {
  return axios.get(`https://api.github.com/repos/${owner}/${repo}/${detail}?per_page=100&page=${page}&client_id=97cb8b36e0795e1c7f16&client_secret=99178ca0186c6ce3bb2b2ef1cfba04468c81fbc0`,
    { headers: { Accept: 'application/vnd.github.mercy-preview+json' } });
}
