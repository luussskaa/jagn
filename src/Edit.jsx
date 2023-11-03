import { v4 as uuid } from 'uuid';

import { getNote, checkPath, editNote } from "./functions";

import Back from './assets/Back.svg';
import Save from './assets/Save.svg';
import { useState } from 'react';

let title = '';
let note = '';
let id = '';

function saveEdit() {
    note = note.replaceAll('+++', '<h1>').replaceAll('++', '</h1>').replaceAll('===', '<h2>').replaceAll('==', '</h2>').replaceAll('---', '<p>').replaceAll('--', '</p>');
    editNote({ id, title, note });
    window.location.pathname = '/';
}

export default function Edit() {
    const [edit, setEdit] = useState(true);
    id = checkPath();
    const findNote = getNote(id);
    const noteText = findNote.note;
    const toEdit = noteText.replaceAll('<h1>', '+++').replaceAll('</h1>', '++').replaceAll('<h2>', '===').replaceAll('</h2>', '==').replaceAll('<p>', '---').replaceAll('</p>', '--');
    const goBack = () => {
        window.location.pathname = '/';
    }
    const handleTitle = (evt) => {
        title = evt.target.value;
        if (title !== '') {
            setEdit(true);
        } else {
            setEdit(false);
        }
    }
    const handleNote = (evt) => {
        note = evt.target.value;
        if (note !== '') {
            setEdit(true);
        } else {
            setEdit(false);
        }
    }
    title = findNote.title;
    note = findNote.note;
    return (
        <div className='NewEditNote'>
            <div className='buttonContainer'>
                <button onClick={goBack}><img src={Back} /></button>
                {edit ?
                    <button onClick={saveEdit}><img src={Save} /></button>
                    :
                    <button disabled onClick={saveEdit}><img src={Save} /></button>
                }
            </div>
            <input type="text" onChange={handleTitle} placeholder={findNote.title} />
            <h6>- My note -</h6>
            <textarea onChange={handleNote} cols="30" rows="10" defaultValue={toEdit}></textarea>
            <p>Wrap titles between +++ and ++.</p>
            <p>Wrap subtitles between === and ==.</p>
            <p>Wrap paragraphs between --- and --.</p>
        </div>
    )
}