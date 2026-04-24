import { Outlet } from 'react-router'
import Navbar from './Componets/Navbar'

const Rootlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Rootlayout
