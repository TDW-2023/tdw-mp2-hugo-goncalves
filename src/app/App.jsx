import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import SearchPage from "../pages/SearchPage.jsx";

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
