import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects'
import { FETCH_REPOS, FETCH_REPO_DETAILS, receiveRepos, receiveRepoDetails } from './actions'
import { getGithubRepos, getGithubRepoDetails } from './githubApi'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchGithubRepos(action) {
   try {
     let repos = [];
     let fetchNext = true;
     let page = 1;
     while (fetchNext) {
       const resp = yield call(getGithubRepos, action.organization, page++);
       repos = [...repos, ...resp.data];
       // Check if header links contains the rel="next" we need to query next page
       fetchNext = resp.headers.link.indexOf('rel="next"') !== -1;
     }
     yield put(receiveRepos(repos));
   } catch (e) {
      console.log('error' + e);
   }
}
function* fetchGithubRepoDetails(action) {
   try {
     let details = null;
     let fetchNext = true;
     let page = 1;
     while (fetchNext) {
       const resp = yield call(getGithubRepoDetails, action.owner, action.repo, action.detail, page++);
       if (resp.data.constructor === Array) {
         if (!details) details = [];
         details = [...details, ...resp.data];
       } else {
         if (!details) details = {};
         details = { ...details, ...resp.data };
       }

       // Check if header links contains the rel="next" we need to query next page
       fetchNext = resp.headers.link && resp.headers.link.indexOf('rel="next"') !== -1;
     }
     yield put(receiveRepoDetails(action.detail, details));
   } catch (e) {
      console.log('error' + e);
   }
}



function* mySaga() {
  yield all([
    takeLatest(FETCH_REPOS, fetchGithubRepos),
    takeEvery(FETCH_REPO_DETAILS, fetchGithubRepoDetails) // called multiple times for each Repo detail (contributors, topics, etc.)
  ]);
}

export default mySaga;
