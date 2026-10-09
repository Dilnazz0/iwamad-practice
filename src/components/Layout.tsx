import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <Header title="Dilnaz - Personal Profile" subtitle="Future Web Developer" />
      <Outlet />
      <Footer year={2026} author="Dilnaz" />
    </>
  )
}

export default Layout