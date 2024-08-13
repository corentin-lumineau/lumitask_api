import '../../styles/pages/Homepage.css';
import Navigator from '../../components/Navigator';
import Searchbar from '../../components/SearchBar';

export default function Homepage() {
    return(
        <div className='main-container'>
            <div className='navigator-container'><Navigator /></div>
            <div className='dashboard-container'>
                <div className='dashboard-block'>
                    <Searchbar />
                </div>
            </div>
        </div>
    )
}