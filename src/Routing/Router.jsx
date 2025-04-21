import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from "../Pages/Home";
import AboutUs from './../Pages/AboutUs/AboutUs';
import ContactUs from "./../Pages/ContactUs/ContactUs";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SinglePage from './../Pages/SinglePage/SinglePage';
import UserProfile from "../Pages/Profile/UserProfile";
import OrderPage from "../Pages/Order-Page/OrderPage";
import MyAddress from "../Pages/MyAddress/MyAddress";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
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
                path: "/category/:category",
                element: <CategoryPage />
            },
            {
                path: "/product-details/:id",
                element: <SinglePage />
            },
            {
                path: "/dashboard",
                element: <UserProfile />,
                children: [
                    {
                        index: true,
                        element: <MyAddress />
                    },
                    {
                        path: "my-address",
                        element: <MyAddress />
                    },
                    {
                        path: "order",
                        element: <OrderPage />
                    }
                ]
            }
        ]
    }
])

export default router;