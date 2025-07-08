import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Login: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation() as any
  const from = location.state?.from?.pathname || '/admin'

  const handleLogin = () => {
    login()
    navigate(from, { replace: true })
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Log In</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}
