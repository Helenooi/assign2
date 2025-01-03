import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './css/index.css'
import App from './Pages/App'
import Homepage from './Pages/homepage'

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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
