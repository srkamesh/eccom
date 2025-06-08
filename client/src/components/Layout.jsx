import React from 'react'
import { useMatch } from 'react-router-dom'
import Navbar from './student/Navbar'

const Layout = () => {
  const match = useMatch('/educator/*')
  const isEducatorRoute = !!match

  return !isEducatorRoute ? <Navbar /> : null
}

export default Layout
