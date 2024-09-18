import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { modaleSlice } from '../features/modale';
import { taskSlice } from '../features/task/taskSlice';


export const store = configureStore(
    {
        reducer: combineReducers({
            modale: modaleSlice.reducer,
            tasks: taskSlice.reducer
        }),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    }
)