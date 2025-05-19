import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    task :[ {

        id : "01",
        title : "HTML Developer Task",
        description : "It is an HTML developer tasks .",
        dueDate : "19-08-2025",
        isCompleted : false ,
        priority : "High"
    },
    {
    id: "02",
    title: "CSS Styling Task",
    description: "Apply styles to the homepage using CSS.",
    dueDate: "21-08-2025",
    isCompleted: false,
    priority: "Medium"
},
{
    id: "03",
    title: "JavaScript Functionality",
    description: "Add interactive behavior using JavaScript.",
    dueDate: "25-08-2025",
    isCompleted: false,
    priority: "High"
},
{
    id: "04",
    title: "React Component Design",
    description: "Create reusable components in React.",
    dueDate: "28-08-2025",
    isCompleted: false,
    priority: "High"
},
{
    id: "05",
    title: "Responsive Design Fixes",
    description: "Ensure the website is mobile-friendly.",
    dueDate: "30-08-2025",
    isCompleted: false,
    priority: "Low"
},
{
    id: "06",
    title: "Final Debugging & Testing",
    description: "Test and debug all functionalities before deployment.",
    dueDate: "02-09-2025",
    isCompleted: false,
    priority: "Medium"
}

   
    ]
}

const taskSlice = createSlice({
    name : "task",
    initialState ,
    reducers : {
     
        addTask: (state, action) => {
      state.task.push(action.payload);
    }, 


    deleteTask: (state, action) => {
  state.task = state.task.filter(task => task.id !== action.payload);
},


completeTask: (state, action) => {
  const task = state.task.find(t => t.id === action.payload);
  if (task) {
    task.isCompleted = !task.isCompleted; // toggle completed status
  }
}




    }
})


export const { addTask , deleteTask , completeTask } = taskSlice.actions
export default taskSlice.reducer