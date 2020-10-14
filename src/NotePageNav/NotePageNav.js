import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './NotePageNav.css'
import AppContext from '../AppContext'
import {getNotesForFolder, findNote, findFolder} from '../notes-helpers';


export default function NotePageNav(props) {
  return (
    <AppContext.Consumer>
      {value => {
        const { noteId } = props.match.params;
        const note = findNote(value.notes, noteId) || {};
        const folder = findFolder(value.folders, note.folderId);
        return (
          <div className='NotePageNav'>
            <CircleButton
              tag='button'
              role='link'
              onClick={() => props.history.goBack()}
              className='NotePageNav__back-button'
            >
              <FontAwesomeIcon icon='chevron-left' />
              <br />
        Back
      </CircleButton>
            {folder && (
              <h3 className='NotePageNav__folder-name'>
                {folder.name}
              </h3>
            )}
          </div>
        )
      }}

    </AppContext.Consumer>

  )
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => { }
  }
}
