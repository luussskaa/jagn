export default function ViewNote({ content }) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}