import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from "../Pages/Home";
import AboutUs from './../Pages/AboutUs/AboutUs';
import ContactUs from "./../Pages/ContactUs/ContactUs";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
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
            },
            {
                path: "/category",
                element: <CategoryPage />
            }
        ]
    }
])

export default router;