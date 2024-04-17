import styled from 'styled-components'

export const NotesAppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 21px;
  color: #4c63b6;
  font-weight: bold;
`

export const NotesContainer = styled.form`
  height: 300px;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 0px 2px 2px #aab8c8;
  border-radius: 6px;
`

export const InputContainer = styled.input`
  height: 40px;
  outline: none;
  border: 0px solid transparent;
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  padding: 10px;
  font-weight: bold;
  width: 100%;
`
export const TextAreaContainer = styled.textarea`
  height: 150px;
  outline: none;
  border: 0px solid transparent;
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`
export const AddButton = styled.button`
  height: 40px;
  width: 100px;
  outline: none;
  border: 0px solid transparent;
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  background-color: #4c63b6;
  margin-left: auto;
  cursor: pointer;
  border-radius: 6px;
`
export const NoteUlContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`
export const EmptyNotesContainer = styled.form`
  height: 300px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
`

export const EmptyNotesImage = styled.img`
  height: 150px;
  width: 150px;
`

export const NoNotesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 11px;
  color: #1e293b;
  font-weight: bold;
`

export const NoNotesParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #475569;
  font-weight: bold;
`
