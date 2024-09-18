import '../../styles/pages/Homepage.css';
import Navigator from '../../components/Navigator';
import Modale from '../../components/Modale';
import SearchBar from '../../features/searchbar/SearchBar'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModaleIsDisplayed, getAllTasks, getTasksStatus, getTasksError } from '../../utils/selector';
import Tasks from '../../features/task/Tasks';
import { fetchTasks } from '../../features/task/taskSlice.js';




export default function Homepage() {
    const dispatch = useDispatch();
    const modaleDisplayed = useSelector(selectModaleIsDisplayed);
    const tasks = useSelector(getAllTasks);
    const status = useSelector(getTasksStatus);
    const error = useSelector(getTasksError);

    useEffect(() => {
        if (status === 'false') {
            dispatch(fetchTasks());
        }
    }, [dispatch, status])
    
    return(
        <div className='main-container'>
            { modaleDisplayed ? <Modale /> : null }
            <div className='navigator-container'><Navigator /></div>
            <div className='dashboard-container'>
                <div className='dashboard-block'>
                    <SearchBar />
                    <div className='features-container'>
                        { status === 'loading' && <p>Loading...</p> }
                        { status === 'failed' && <p>Error: {error}</p> }
                        { status === 'succeeded' && <Tasks tasks= {tasks}/> }
                    </div>
                </div>
            </div>
        </div>
    )
}