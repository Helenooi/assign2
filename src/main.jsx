import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './css/index.css'
import App from './Pages/App'
import Homepage from './Pages/homepage'
import Attraction from './Pages/attraction'
import AboutPenang from './Pages/AboutPenang'
import ChineseFood from './Pages/ChineseFood'
import MalayFood from './Pages/MalayFood'
import IndianFood from './Pages/IndianFood'

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/


// Me add

const router = createBrowserRouter([
  {
    path: "homepage",
    element: <Homepage/>,
  },
  {
    path: "App",
    element: <App/>,
  },
  {
    path: "attraction",
    element: <Attraction/>,
  },
  {
    path: "AboutPenang",
    element: <AboutPenang/>,
  },
  {
    path: "ChineseFood",
    element: <ChineseFood/>,
  },
  {
    path: "MalayFood",
    element: <MalayFood/>,
  },
  {
    path: "IndianFood",
    element: <IndianFood/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
