import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  NotesAppContainer,
  NotesHeading,
  NotesContainer,
  InputContainer,
  TextAreaContainer,
  AddButton,
  NoteUlContainer,
  EmptyNotesContainer,
  EmptyNotesImage,
  NoNotesHeading,
  NoNotesParagraph,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNote = event => {
    setNotes(event.target.value)
  }
  const onSubmitNotes = event => {
    event.preventDefault()
    console.log('Submitted Notes')
    const newNote = {
      id: v4(),
      title,
      notes,
    }
    setNotesList(prev => [...prev, newNote])
    setTitle('')
    setNotes('')
    console.log(notesList)
  }

  return (
    <NotesAppContainer>
      <NotesHeading>Notes</NotesHeading>
      <NotesContainer onSubmit={onSubmitNotes}>
        <InputContainer
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <TextAreaContainer
          placeholder="Take a Note..."
          onChange={onChangeNote}
          value={notes}
        />
        <AddButton type="submit">Add</AddButton>
      </NotesContainer>
      {notesList.length === 0 ? (
        <EmptyNotesContainer>
          <EmptyNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesParagraph>Notes you add will appear here</NoNotesParagraph>
        </EmptyNotesContainer>
      ) : (
        <NoteUlContainer>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NoteUlContainer>
      )}
    </NotesAppContainer>
  )
}

export default Notes
