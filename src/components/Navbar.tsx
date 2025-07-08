import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()
  const nav = useNavigate()

  const handleLogout = () => {
    logout()
    nav('/login')
  }

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/blog" style={{ marginRight: '1rem' }}>Blog</Link>
      {isAuthenticated ? (
        <>
          <Link to="/admin" style={{ marginRight: '1rem' }}>Admin</Link>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  )
}
