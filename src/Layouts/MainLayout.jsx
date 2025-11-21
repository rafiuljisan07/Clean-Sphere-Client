import { Outlet } from 'react-router'
import '../app.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function MainLayout() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
