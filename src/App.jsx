
// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import Main from './layouts/Main';

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from "./pages/Services";
import Works from "./pages/Works";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

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
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/work",
        element: <Works />
      },
      {
        path: "/testimonials",
        element: <Testimonials />
      },
      {
        path: '/contact',
        element: <Contact />
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