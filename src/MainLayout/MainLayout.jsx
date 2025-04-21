import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
// import Breadcrumbs from '../Components/Breadcrumbs'

export default function MainLayout() {
  return (
    <div>
    {/* <Breadcrumbs /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
