import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
    <div className='flex h-scrren'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Navbar />
        <main className='flex-1 p-6 overflow-y-auto bg-gray-950'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout