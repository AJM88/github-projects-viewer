import React from 'react'
import PropTypes from 'prop-types'
import './MainRepo.css'

const MainRepo = (props) => (
  <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <div>
      <h3>Topics</h3>
      <ul>
      {props.topics && props.topics.names && Object.keys(props.topics.names).map(t =>
        <li>{props.topics.names[t]}</li>
      )}
      </ul>
    </div>
    <div>
      <h3>Languages</h3>
      <ul>
      {props.languages && Object.keys(props.languages).map(l =>
        <li>{l}</li>
      )}
      </ul>
    </div>
    <div>
      <h3>Contributors</h3>
      <ul>
      {props.contributors && props.contributors.map(c =>
        <li><img className="avatar" src={c.avatar_url} alt="avatar"/>{c.login}</li>
      )}
      </ul>
    </div>
  </div>
);

MainRepo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default MainRepo;
