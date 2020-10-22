import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'
import AppContext from '../AppContext'
import PropTypes from 'prop-types'

export default function Note(props) {
  return (
    <AppContext.Consumer>
      {value => {
        function onDelete(){
          fetch("http://localhost:9090/notes/" + props.id, {
            method: "delete"
          })
          .then(response => {
            value.getData()
            props.history.push("/")
          })
        }
        return (
          <div className='Note'>
            <h2 className='Note__title'>
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <button onClick={onDelete} className='Note__delete' type='button'>
        <FontAwesomeIcon icon='trash-alt' />
        {' '}
        remove
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
        )
      }}
    </AppContext.Consumer>
    
  )
}

Note.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  history: PropTypes.any,
  modify: PropTypes.string
}