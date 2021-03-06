import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import AppContext from "../AppContext";
import {getNotesForFolder, findNote, findFolder} from '../notes-helpers';
import PropTypes from 'prop-types'

export default function NoteListMain(props) {
  

  return (
    <AppContext.Consumer>
      {value => {
        const { folderId } = props.match.params;
        const notesForFolder = getNotesForFolder(
          value.notes,
          folderId
        );
      
      return (
        <section className='NoteListMain'>
      <ul>
        {notesForFolder.map(note =>
          <li key={note.id}>
            <Note
              history={props.history}
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
      <div className='NoteListMain__button-container'>
        <CircleButton
          tag={Link}
          to='/add-note'
          type='button'
          className='NoteListMain__add-note-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          Note
        </CircleButton>
      </div>
    </section>
      )
        }}
    </AppContext.Consumer>
    
  )}

NoteListMain.defaultProps = {
  notes: [],
}
Note.propTypes = {

  history: PropTypes.any,
  match: PropTypes.any
  
}