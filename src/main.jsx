import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Createpost from "./component/component/Createpost.js";
import { Postlist } from "./store/postliststore.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Postlist /> },
      { path: "/create-post", element: <Createpost/>  },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
