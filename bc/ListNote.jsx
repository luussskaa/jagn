import NewNote from "./NewNote";
import ViewNote from "./ViewNote";

export default function ListNote({ content, enableEdit, editNote, enableView, viewNote }) {
    const findIndex = content[0].indexOf('</h1>');
    const prep = content[0].slice(0, findIndex);
    const deleteNote = () => {
        const data = JSON.parse(localStorage.getItem('notes'));
        const filteredData = data.filter(e => e[0] !== content[0]);
        localStorage.setItem('notes', JSON.stringify(filteredData));
        location.reload();
    }
    const switchEdit = () => {
        enableEdit();
    }
    const toEdit = content[0].replace('<h1>', '+++').replace('</h1>', '++').replace('<h2>', '===').replace('</h2>', '==').replace('<p>', '---').replace('</p>', '--');
    const switchView = () => {
        enableView();
    }
    const prepPrint = () => {
        window.print();
    }
    return (
        <>
            {!editNote && !viewNote &&
                <div className="container">
                    <div
                        dangerouslySetInnerHTML={{ __html: prep }}
                    />
                    <button onClick={deleteNote}>D</button>
                    <button onClick={switchEdit}>E</button>
                    <button onClick={switchView}>V</button>
                    <button onClick={prepPrint}>P</button>
                </div>
            }
            <button onClick={switchEdit}>E</button>
            <button onClick={switchView}>V</button>
            {editNote &&
                <NewNote toEdit={toEdit} />
            }
            {viewNote && <ViewNote content={content} />}
        </>
    )
}