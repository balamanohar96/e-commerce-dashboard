import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Sales from "./components/Sales";
import Revenue from "./components/Revenue";
import Error from "./components/Error";
import Customer from "./components/Customer";
import Performance from "./components/Performance";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Sales />,
        },
        {
          path: "/revenue",
          element: <Revenue />,
        },
        {
          path: "/performance",
          element: <Performance />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
