import AddCircle from "@mui/icons-material/AddCircle";
import { useStore } from 'react-redux';
import { modaleSlice } from '../modale.js';
import { TaskCard } from "./TaskCard";
import { Button } from "@mui/material";
import '../../styles/components/Tasks.css'

export default function Tasks(props) {
    const store = useStore()
    return(
        <div className='tasks-container'>
            <Button variant='contained' startIcon={<AddCircle />} onClick={() => store.dispatch(modaleSlice.actions.toggle())}>To do</Button>
            <div className='tasks-block'>
                { props.tasks.map((task) => {
                    return (
                        <TaskCard key={task.id} taskId={task.id} task={task} />
                    )
                }) }
            </div>
        </div>
    ) ;
}