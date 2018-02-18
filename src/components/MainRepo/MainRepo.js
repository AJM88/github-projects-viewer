import React from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import './MainRepo.css'

const MainRepo = (props) => (
  <div className="mainRepo">
    <div className="mainRepo__header">
      <div className="mainRepo__header__title">
        <h1>{props.name}</h1>
        <a href={props.url} target="_blank">{props.url}</a>
      </div>
      <p>{props.description}</p>
    </div>
    <div className="mainRepo__details-lists">
      <div className="mainRepo__details-lists__item loader-container">
        {props.topics && props.topics.fetching &&
          <Loader></Loader>
        }
        <h3 className="mainRepo__details-lists__item__title">Topics</h3>
        <ul>
          {props.topics && props.topics.data && Object.keys(props.topics.data.names).map(t =>
            <li>{props.topics.data.names[t]}</li>
          )}
        </ul>
      </div>
      <div className="mainRepo__details-lists__item loader-container">
        {props.languages && props.languages.fetching &&
          <Loader></Loader>
        }
        <h3 className="mainRepo__details-lists__item__title">Languages</h3>
        <ul>
          {props.languages && props.languages.data && Object.keys(props.languages.data).map(l =>
            <li>{l}</li>
          )}
        </ul>
      </div>
      <div className="mainRepo__details-lists__item loader-container">
        {props.contributors && props.contributors.fetching &&
          <Loader></Loader>
        }
        <h3 className="mainRepo__details-lists__item__title">Contributors</h3>
        <ul>
          {props.contributors && props.contributors.data && props.contributors.data.map(c =>
            <li className="mainRepo__details-lists__item__row">
                <img className="avatar" src={c.avatar_url} alt="avatar"/>
                <div><a href={c.html_url} target="_blank">{c.login}</a>: {c.contributions}</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  </div>
);

MainRepo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default MainRepo;
