let notes = null;

export function checkPath() {
    const pathName = window.location.pathname;
    const getId = pathName.slice(1, 37);
    return getId;
}

export function addNote(newNote) {
    if (!localStorage.notes) {
        notes = [];
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
    } else {
        const data = JSON.parse(localStorage.getItem('notes'));
        data.push(newNote);
        localStorage.setItem('notes', JSON.stringify(data));
    }
}

export function loadNotes() {
    return JSON.parse(localStorage.getItem('notes'));
}

export function getNote(id) {
    const data = loadNotes();
    const filteredData = data.filter(e => e.id === id);
    const filteredData2 = { ...filteredData[0] }
    return filteredData2;
}

export function deleteNote(id) {
    const data = JSON.parse(localStorage.getItem('notes'));
    const filteredData = data.filter(e => e.id !== id);
    localStorage.setItem('notes', JSON.stringify(filteredData));
}

export function editNote(noteData) {
    const editedNote = { id: noteData.id, title: noteData.title, note: noteData.note }
    deleteNote(noteData.id);
    addNote(editedNote);
}