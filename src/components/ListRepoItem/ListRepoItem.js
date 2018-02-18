import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './ListRepoItem.css'

const ListRepoItem = (props) => (
  <li className="repoItem" onClick={() => props.onClick(props.id, props.name)}>
    <h3>{props.name} - {props.watchers}</h3>
    <p>{props.description}</p>
    <br/>{props.language}
    <br/>Created {moment(props.created).format('ll')}
    <br/>Updated {moment(props.updated).fromNow()}
  </li>
);

ListRepoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  watchers: PropTypes.number.isRequired,
  created: PropTypes.any.isRequired,
  updated: PropTypes.any.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default ListRepoItem;
