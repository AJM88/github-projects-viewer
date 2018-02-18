import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeUser, fetchRepos, fetchRepoDetails } from '../../actions'
import ListRepoItem from '../../components/ListRepoItem'
import MainRepo from '../../components/MainRepo'
import Loader from '../../components/Loader'
import './Home.css'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedRepo: null,
      editUser: false
    };
    this.handleRepoClick = this.handleRepoClick.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchRepos(this.props.github.organization);
  }

  handleRepoClick(repoId, name) {
    this.setState({selectedRepo: repoId});
    this.props.fetchRepoDetails(this.props.github.organization, name, 'contributors');
    this.props.fetchRepoDetails(this.props.github.organization, name, 'languages');
    this.props.fetchRepoDetails(this.props.github.organization, name, 'topics');
  }

  handleEditUser() {
    if (this.state.editUser) {
      this.setState({editUser: false});
      this.props.changeUser(this.state.newUser);
      this.props.fetchRepos(this.state.newUser);
    } else {
      this.setState({editUser: true});
    }
  }

  handleUserChange(input) {
    this.setState({newUser: input.target.value});
  }

  render() {
    const repos = this.props.github.repos;
    const selectedRepoItem = (this.state.selectedRepo && repos)
                              && repos.filter(r => r.id === this.state.selectedRepo)[0];
    return (
      <div className="home">
        <div className="home__sidebar">
          <div className="home__sidebar__header">
            {!this.state.editUser &&
              <h1>{this.props.github.organization}</h1>
            }
            {this.state.editUser &&
              <input type="text" defaultValue={this.props.github.organization} onChange={this.handleUserChange}/>
            }
            <button onClick={() => this.handleEditUser(this)}>{this.state.editUser ? 'Save' : 'Edit'}</button>
          </div>
          <ul className="home__sidebar__list loader-container">
            {this.props.github.fetching &&
              <Loader></Loader>
            }
            {repos && repos.sort((a, b) => b.watchers - a.watchers).map(repo =>
              <ListRepoItem key={repo.id}
                id={repo.id}
                name={repo.name}
                watchers={repo.watchers}
                language={repo.language}
                description={repo.description}
                created={repo.created_at}
                updated={repo.updated_at}
                onClick={this.handleRepoClick}
                >
              </ListRepoItem>
            )}
          </ul>
        </div>
        {this.state.selectedRepo && selectedRepoItem &&
          <MainRepo className="home__repo-content"
            name={selectedRepoItem.name}
            description={selectedRepoItem.description}
            watchers={selectedRepoItem.watchers}
            contributors={this.props.github.contributors}
            topics={this.props.github.topics}
            languages={this.props.github.languages}
            url={selectedRepoItem.html_url}
            >
          </MainRepo>
        }
        {!this.state.selectedRepo &&
          <div className="home__repo-notselected loader-container">
            <h3>Select a repository on the left to display information</h3>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRepos,
  fetchRepoDetails,
  changeUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
