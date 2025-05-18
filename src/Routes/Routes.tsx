import App from "@/App";
import CounterPage from "@/components/Pages/CounterPage";
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
            element : <CounterPage></CounterPage>
        }


    ]
}



])


export default routes