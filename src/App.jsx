
// react-router-dom
import { createBrowserRouter, RouterProvider, Routes, useLocation } from "react-router-dom";

// Layouts
import Main from './layouts/Main';

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Transition from "./components/Transition";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);

const App = () => {

  return (
    <div>
      <RouterProvider router={router}>
        <Transition />
      </RouterProvider>
    </div>
  )
}

export default App