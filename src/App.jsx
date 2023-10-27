
// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import Main from './layouts/Main';

// Pages
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App