import { getNote, checkPath } from "./functions";

import { Link } from 'react-router-dom';

import { deleteNote } from './functions';

import Edit from './assets/Edit.svg';
import Delete from './assets/Delete.svg';
import Back from './assets/Back.svg';
import Print from './assets/Print.svg';
import { useState } from "react";

export default function ViewNote() {
    const [showButtons, setShowButtons] = useState(true)
    const id = checkPath()
    const findNote = getNote(id);
    const noteText = findNote.note;
    console.log(noteText)
    const goBack = () => {
        window.location.pathname = '/';
    }
    const handleDelete = () => {
        deleteNote(id);
        window.location.pathname = '/';
    }
    const prepPrint = () => {
        setShowButtons(false)
        setTimeout(() => {
            window.print();
            setShowButtons(true);
        }, 1000);
    }
    return (
        <>
            {showButtons &&
                <div className='buttonContainer'>
                    <button onClick={goBack} id="back"><img src={Back} /></button>
                    <Link to={`/${id}/edit`} id="edit"><img src={Edit} /></Link>
                    <button onClick={handleDelete} id="delete"><img src={Delete} /></button>
                    <button onClick={prepPrint} id="print"><img src={Print} /></button>
                </div>
            }
            <div className="viewBox"
                dangerouslySetInnerHTML={{ __html: noteText }}
            />

        </>
    )
}