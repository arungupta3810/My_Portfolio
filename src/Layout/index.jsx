import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Layout