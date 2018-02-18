import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRepos, fetchRepoDetails } from '../../actions'
import ListRepoItem from '../../components/ListRepoItem'
import MainRepo from '../../components/MainRepo'
import './Home.css'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedRepo: null
    };
    this.handleRepoClick = this.handleRepoClick.bind(this);
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

  render() {
    const repos = this.props.github.repos;
    const selectedRepoItem = (this.state.selectedRepo && repos)
                              && repos.filter(r => r.id === this.state.selectedRepo)[0];
    return (
      <div className="body">
        <div>
          <div>
            <h2>{this.props.github.organization}</h2>
          </div>
          <ul className="repoList">
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
        {this.state.selectedRepo &&
          <MainRepo className="repoContainer"
            name={selectedRepoItem.name}
            description={selectedRepoItem.description}
            watchers={selectedRepoItem.watchers}
            contributors={this.props.github.contributors}
            topics={this.props.github.topics}
            languages={this.props.github.languages}
            >
          </MainRepo>
        }
        {!this.state.selectedRepo &&
          <div>Select a repository on the left to display information</div>
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
  fetchRepoDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
