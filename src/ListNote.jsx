export default function ListNote({ title, id }) {

    const viewNote = () => {
        window.location.pathname = `/${id}/read`;
    }
    return (
        <>
            <div className="container" onClick={viewNote}
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </>
    )
}