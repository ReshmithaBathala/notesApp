import {
  NoteItemContainer,
  HeadingNotes,
  ParagraphNotes,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, notes} = noteDetails
  return (
    <NoteItemContainer>
      <HeadingNotes>{title}</HeadingNotes>
      <ParagraphNotes>{notes}</ParagraphNotes>
    </NoteItemContainer>
  )
}

export default NoteItem
