import React from 'react'
import { Route,Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import { useAuth } from '@clerk/react'

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth()
  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }
  return children
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard/>} />
          <Route path='write-article' element={<WriteArticle/>} />
          <Route path='blog-titles' element={<BlogTitles/>} />
          <Route path='generate-images' element={<GenerateImages/>} />
          <Route path='remove-background' element={<RemoveBackground/>} />
          <Route path='remove-object' element={<RemoveObject/>} />
          <Route path='review-resume' element={<ReviewResume/>} />
          <Route path='community' element={<Community/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
