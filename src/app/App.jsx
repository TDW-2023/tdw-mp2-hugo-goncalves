import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import RecipePage from "../pages/RecipePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
    children: [
      {
        path: ":query",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/recipes/:recipeId",
    element: <RecipePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
