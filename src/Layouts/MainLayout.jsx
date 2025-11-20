import { Outlet } from 'react-router'
import '../app.css'
import Navbar from '../Components/Navbar'

function MainLayout() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
