import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";


import Rootlayout from "./layouts/Rootlayout";
import Helplayout from "./layouts/Helplayout";
import Faq from "./Pages/help/Faq";
import Contact from "./Pages/help/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Rootlayout />}>
      <Route index element= {<Home />} />
      <Route path="about" element= {<About />} />
      <Route path='help' element= {<Helplayout />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
      </Route>
    
  )
)

function App() {
  return (
      <RouterProvider router={router} />

  );
}

export default App
