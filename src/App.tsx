import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Homepage from "./pages/Homepage";
import SingleCountryPage from "./pages/SingleCountryPage";
import NotFoundError from "./components/NotFoundError";
import countryLoader from "./loader/SingleCountryLoader";
import { SingleCountryError } from "./components/single country/SingleCountryError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "single-country",
        element: <SingleCountryPage />,
        loader: countryLoader,
        errorElement: <SingleCountryError />,
      },
      { path: "*", element: <NotFoundError /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
