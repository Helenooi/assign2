import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './css/index.css'
import App from './Pages/App'
import Homepage from './Pages/homepage'
import Arts from './Pages/Arts'
import Multiracial from './Pages/Multiracial'
import HeritageSites from './Pages/HeritageSites'
import HeritageConservation from './Pages/HeritageConservation';
import SacredSpace from './Pages/SacredSpace';
/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/


// Me add

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "homepage",
    element: <Homepage/>,
  },
  {
    path: "App",
    element: <App/>,
  },
  {
    path: "Arts",
    element: <Arts/>,
  },
  {
    path: "Multiracial",
    element: <Multiracial/>,
  },
  {
    path: "HeritageSites",
    element: <HeritageSites/>,
  },
  {
    path: "HeritageConservation",
    element: <HeritageConservation/>,
  },
  {
    path: "SacredSpace",
    element: <SacredSpace/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
