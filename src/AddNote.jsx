import { Link } from 'react-router-dom';
import Add from './assets/Add.svg'

export default function AddNote() {
    return (
        <Link to={'/create'} className="AddNote"><img src={Add} />Add Note</Link>
    )
}