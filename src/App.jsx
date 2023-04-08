import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Protected from  './components/Protected'

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={
            <Protected>
              <Home />
            </Protected>
          } />
        </Routes> 
      </AuthContextProvider>
    </div>
  )
}

export default App
