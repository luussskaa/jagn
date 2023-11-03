import { v4 as uuid } from 'uuid';

import { addNote } from "./functions";

import Back from './assets/Back.svg';
import Save from './assets/Save.svg'
import { useState } from 'react';

let newNote = '';
let title = '';
let note = '';

function saveNote() {
    newNote = { id: uuid(), title: title, note: note.replaceAll('+++', '<h1>').replaceAll('++', '</h1>').replaceAll('===', '<h2>').replaceAll('==', '</h2>').replaceAll('---', '<p>').replaceAll('--', '</p>') };
    addNote(newNote);
    window.location.pathname = '/';
}

export default function NewNote({ toEdit }) {
    const [save, setSave] = useState(false);
    const handleTitle = (evt) => {
        title = evt.target.value;
        if (title !== '') {
            setSave(true);
        } else {
            setSave(false);
        }
    }
    const handleNote = (evt) => {
        note = evt.target.value;
        if (note !== '') {
            setSave(true);
        } else {
            setSave(false);
        }
    }
    const goBack = () => {
        window.location.pathname = '/';
    }
    return (
        <div className='NewEditNote'>
            <div className='buttonContainer'>
                <button onClick={goBack} id="back"><img src={Back} /></button>
                {save ?
                    <button onClick={saveNote}><img src={Save} /></button>
                    :
                    <button disabled onClick={saveNote}><img src={Save} /></button>
                }
            </div>
            <input type="text" onChange={handleTitle} placeholder='Title' />
            <h6>- My note -</h6>
            <textarea onChange={handleNote} cols="30" rows="10" defaultValue={toEdit} placeholder='Type here...'></textarea>
            <p>Wrap titles between +++ and ++.</p>
            <p>Wrap subtitles between === and ==.</p>
            <p>Wrap paragraphs between --- and --.</p>
        </div>
    )
}