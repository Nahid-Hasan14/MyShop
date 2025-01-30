import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from "../Pages/Home";
import AboutUs from './../Pages/AboutUs/AboutUs';
import ContactUs from "./../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about-us",
                element: <AboutUs/>
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            }
        ]
    }
])

export default router;