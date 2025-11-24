import { Outlet } from 'react-router'
import '../app.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function MainLayout() {

  return (
    <div className='flex flex-col  min-h-screen space-y-20'>
      <Navbar />
      <div className='flex-1 max-w-11/12 mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
