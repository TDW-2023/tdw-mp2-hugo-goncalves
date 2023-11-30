import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import RecipePage from "../pages/RecipePage.jsx";

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
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
