import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";
import Statistics from "../Statistice/Statistics.jsx";
import Blog from "../Blog/Blog.jsx";
import AppliedJobs from "../AppliedJobs/AppliedJobs.jsx";
import Home from "../Home/Home.Jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/statistics',
                element:<Statistics/>
            },
            {
                path:'/blogs',
                element:<Blog/>
            },
            {
                path:'/appliedJobs',
                element:<AppliedJobs/>
            }
        ]
    }
])
export default router;