import '../styles/components/Navigator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/icons.js';

export default function Navigator() {
    return(
        <div className="navigator-block">
            <ul className='navigator-link'>
                <li><FontAwesomeIcon icon="fa-solid fa-table-columns" /> <p>Dashboard</p></li>
                <li><FontAwesomeIcon icon="fa-solid fa-diagram-project" /> <p>Projects</p></li>
                <li><FontAwesomeIcon icon="fa-solid fa-list-check" /><p>My tasks</p></li>
                <li><FontAwesomeIcon icon="fa-solid fa-gauge" /><p>Reports</p></li>
            </ul>
            <div className='logout'><FontAwesomeIcon icon="fa-solid fa-right-from-bracket" /> Logout</div>
        </div>
    )
}