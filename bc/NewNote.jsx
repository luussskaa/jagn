let notes = null;

export default function NewNote({ addNewNote, toEdit }) {
    let newNote = '';
    const change = (evt) => {
        newNote = [evt.target.value.replace('+++', '<h1>').replace('++', '</h1>').replace('===', '<h2>').replace('==', '</h2>').replace('---', '<p>').replace('--', '</p>')];
    }
    const save = () => {
        addNewNote();
        if (!localStorage.notes) {
            notes = [];
            notes.push(newNote);
            localStorage.setItem('notes', JSON.stringify(notes));
        } else {
            const data = JSON.parse(localStorage.getItem('notes'));
            data.push(newNote);
            localStorage.setItem('notes', JSON.stringify(data));
        }
        location.reload();
    }
    return (
        <>
            <button onClick={save}>Save</button>
            <h6>- My note -</h6>
            <textarea onChange={change} cols="30" rows="10">{toEdit}</textarea>
            <p>Wrap titles between +++ and ++.</p>
            <p>Wrap subtitles between === and ==.</p>
            <p>Wrap paragraphs between --- and --.</p>
        </>
    )
}