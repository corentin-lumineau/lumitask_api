import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/components/SearchBar.css";

export default function SearchBar() {
    return (
        <div className="search-bar-container">
            <input className="search-bar" type="text" placeholder="Search..."></input>
            <div className="menu-container">
                <i><FontAwesomeIcon icon="fa-regular fa-bell" /></i>
                <i><FontAwesomeIcon icon="fa-solid fa-user" /></i>
            </div>
        </div>
    )
}