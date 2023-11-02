
// react-router-dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Layouts
import Main from './layouts/Main';

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from "./pages/Services";
import Works from "./pages/Works";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Works />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

const App = () => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App