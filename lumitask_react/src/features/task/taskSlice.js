import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Endpoint adresses
const API_FETCH_URL = "http://localhost:3000/api/v1/tasks";
const API_DELETE_URL = (taskId) => `http://localhost:3000/api/v1/tasks/${taskId}`;


// Thunks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get(API_FETCH_URL);
    return response.data;
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkApi) => {
    try {
        const response = await axios.delete(API_DELETE_URL(taskId));
        return response.data;
        
    } catch(error) {
        console.log(error);
    }
    }
);

// Automatisation for creation of API reducers

const createApiReducers = (builder, thunks) => {
    thunks.forEach( (thunk) => {
        builder.addCase(thunk.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(thunk.fulfilled, (state, action) => {
            state.status = 'succeeded';
            if (Array.isArray(action.payload)) {
                state.items = action.payload
            } else {
                state.items = state.items.filter( task => task.id !== action.payload.id) 
            }
        });
        builder.addCase(thunk.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    })
}

// Initial state
const initialState = {
    items: [],
    status: 'false',
    error: null
}

// Slice declaration
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        createApiReducers(builder, [fetchTasks, deleteTask])
    }
});