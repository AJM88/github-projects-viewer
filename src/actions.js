export const USER_CHANGED = 'USER_CHANGED';

export const FETCH_REPOS = 'FETCH_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const FETCH_REPO_DETAILS = 'FETCH_REPO_DETAILS';
export const RECEIVE_REPO_DETAILS = 'RECEIVE_REPO_DETAILS';

export const fetchRepos = organization => ({type: FETCH_REPOS, organization});
export const receiveRepos = repos => ({type: RECEIVE_REPOS, repos});

export const fetchRepoDetails = (owner, repo, detail) => ({type: FETCH_REPO_DETAILS, owner, repo, detail});
export const receiveRepoDetails = (detail, data) => ({type: RECEIVE_REPO_DETAILS, detail, data});

export const changeUser = (user) => ({type: USER_CHANGED, user});
