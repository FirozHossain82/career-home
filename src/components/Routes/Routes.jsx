import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import Home from "../Home/Home.Jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default router;