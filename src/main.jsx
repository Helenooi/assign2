import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App'
import Homepage from './homepage'

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
