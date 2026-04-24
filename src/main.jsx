import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import UserContext from './Context/UserContext.jsx'
import ThemeContext from './Context/ThemeContext.jsx'
import Rootlayout from './Rootlayout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: App },
      // { path: "about", Component: Shop },
      // {
      //   path: "auth",
      //   Component: AuthLayout,
      //   children: [
      //     { path: "login", Component: Login },
      //     { path: "register", Component: Register },
      //   ],
      // },
      // {
      //   path: "concerts",
      //   children: [
      //     { index: true, Component: ConcertsHome },
      //     { path: ":city", Component: ConcertsCity },
      //     { path: "trending", Component: ConcertsTrending },
      //   ],
      // },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContext>
      <UserContext>
        <RouterProvider router={router} />,
      </UserContext>
    </ThemeContext>
  </StrictMode>,
)
