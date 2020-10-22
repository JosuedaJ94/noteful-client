import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import AppContext from "../AppContext";
import {getNotesForFolder, findNote, findFolder} from '../notes-helpers';
import PropTypes from 'prop-types'

export default function NotePageMain(props) {


  return (
    <AppContext.Consumer>
      {value => {
        const { noteId } = props.match.params;
        const note = findNote(value.notes, noteId);

        return (
          <section className='NotePageMain'>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
              history={props.history}
            />
            <div className='NotePageMain__content'>
              {note.content.split(/\n \r|\n/).map((para, i) =>
                <p key={i}>{para}</p>
              )}
            </div>
          </section>
        )
      }}

    </AppContext.Consumer>

  )
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}

Note.propTypes = {
  
  history: PropTypes.any,
  match: PropTypes.any
}