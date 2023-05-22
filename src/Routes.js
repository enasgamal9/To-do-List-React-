import { createBrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home'
import TodoList from './Pages/TodoList/TodoList'
import TodoDetails from './Pages/TodoDetails/TodoDetails'
import TodoAdd from './Pages/TodoAdd/TodoAdd'
import TodoUpdate from './Pages/TodoUpdate/TodoUpdate'
import Navbar from './Components/Navbar/Navbar';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Home /></> 
    },
    {
        path: "/todo-list",
        element: <><Navbar/>,<TodoList/></>
    },
    {
        path: "/todo-details/:todoRowID",
        element: <><Navbar/>,<TodoDetails/></>
    },
    {
        path: "/todo-update/:todoRowID",
        element: <><Navbar/>,<TodoUpdate/></>
    },
    {
        path: "/todo-add",
        element: <><Navbar/>,<TodoAdd/></>
    }
]);

export default Routes;