import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import '../../styles/components/TaskCard.css';
import { taskSlice } from './taskSlice';
import { useStore } from 'react-redux';
import { deleteTask } from './taskSlice';

export function TaskCard(props) {
    const store = useStore();

    return(
        <div className="task-card">
            <div className='card-content'>
                <h4>{props.task.title}</h4>
                <p>{props.task.content}</p>
            </div>
            <IconButton onClick={ () => store.dispatch(deleteTask(props.taskId))}> 
                <DeleteIcon />
            </IconButton>
        </div>
    )
}