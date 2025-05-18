import App from "@/App";
import CounterPage from "@/components/Pages/CounterPage";
import TasksPage from "@/components/Pages/TasksPage";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([

{
    path : "/",

    element : <App></App>,

    children : [
       
        {
            path : 'Counters',
            element : <CounterPage></CounterPage>
        },
        {
            path : 'Tasks',
            element : <TasksPage></TasksPage>
        }


    ]
}



])


export default routes