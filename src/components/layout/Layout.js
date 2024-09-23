import React from 'react'
import Header from '../header/Header'

const Layout = ({children}) => {
  return (
    <div className='w-full min-h-screen container mx-auto px-3'>
        <Header />
        {children}
    </div>
  )
}

export default Layout;