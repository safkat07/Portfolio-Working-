import { createBrowserRouter} from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import ErrorElement from "../Layout/ErrorElement/ErrorElement";
import Home from "../Layout/Pages/Home";
import About from "../Layout/Pages/About";
import Contacts from "../Layout/Pages/Contacts";
import Projects from "../Layout/Pages/Projects";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'about',
            element: <About></About>
        },
        {
            path: 'contacts',
            element: <Contacts></Contacts>
        },
        {
            path: 'projects',
            element: <Projects></Projects>
        }
      ]
    },
  ]);