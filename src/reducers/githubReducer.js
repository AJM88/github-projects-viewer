import { USER_CHANGED, FETCH_REPOS, FETCH_REPO_DETAILS, RECEIVE_REPOS, RECEIVE_REPO_DETAILS } from '../actions';

const initialState = {
  organization: 'facebook'
}

export default (state=initialState, {type, repos = [], detail, data, user}) => {
  switch (type) {
    case USER_CHANGED:
      return {...state, organization: user};

    case FETCH_REPOS:
      return {...state, fetching: true};
    case RECEIVE_REPOS:
      return {...state, repos: repos, fetching: false};

    case FETCH_REPO_DETAILS:
      return {...state, [detail]: {fetching: true}};
    case RECEIVE_REPO_DETAILS:
      return {...state, [detail]: {data: data, fetching: false}};
    default:
      return state;
  }
}
