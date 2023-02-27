import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserProfileDashboard from '../pages/UserProfileDashboard'

const PublicRoutes = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<UserProfileDashboard/>} />
    </Routes> 
    </>
  )
}

export default PublicRoutes