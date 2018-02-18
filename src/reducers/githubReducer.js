import { RECEIVE_REPOS, RECEIVE_REPO_DETAILS } from '../actions';

const initialState = {
  organization: 'facebook'
}

export default (state=initialState, {type, repos = [], detail, data}) => {
  switch (type) {
    case RECEIVE_REPOS:
      return {...state, repos: repos};
    case RECEIVE_REPO_DETAILS:
      return {...state, [detail]: data};
    default:
      return state;
  }
}
