import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home/home.jsx";
import About from "./Pages/About/about.jsx";
import Services from "./Pages/Services/services.jsx";
import Service from "./Pages/Services/components/service.jsx";
import ErrorPage from "./Pages/Error/Error.jsx";
import "./index.scss";
import { ChakraBaseProvider, theme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
delete theme.styles.global;

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
        path: "/about",
        element: <About style={{ paddingTop: "10rem" }} />,
      },
      {
        path: "/services",
        element: <Services />,
        children: [
          {
            path: "/services/:serviceID",
            element: <Service />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraBaseProvider
      theme={theme}
      resetCSS={false}
      disableGlobalStyle={true}
    >
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>
);
