import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/CounSlice"; 
import taskReducer from  "./Features/Task/taskSlice"

export const store = configureStore({
  reducer: {
    
    counter: counterReducer, 

    tasks : taskReducer ,

    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

