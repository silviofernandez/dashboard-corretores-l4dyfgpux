import React, { createContext, useContext, useState, useEffect } from 'react'

export type Role = 'admin' | 'broker'

export interface User {
  id: string
  name: string
  email: string
  role: Role
  password?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, pass: string) => User | null
  register: (name: string, email: string, pass: string) => User
  logout: () => void
  users: User[]
  createUser: (user: Omit<User, 'id'>) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUsers = localStorage.getItem('app_users')
    let parsedUsers: User[] = []

    if (storedUsers) {
      parsedUsers = JSON.parse(storedUsers)
    } else {
      parsedUsers = [
        {
          id: '1',
          name: 'Administrador Master',
          email: 'admin@imobiliaria.com',
          role: 'admin',
          password: '123',
        },
        {
          id: '2',
          name: 'Corretor João',
          email: 'joao@imobiliaria.com',
          role: 'broker',
          password: '123',
        },
      ]
      localStorage.setItem('app_users', JSON.stringify(parsedUsers))
    }

    setUsers(parsedUsers)

    const storedAuth = localStorage.getItem('app_auth_user')
    if (storedAuth) {
      setUser(JSON.parse(storedAuth))
    }
    setLoading(false)
  }, [])

  const login = (email: string, pass: string) => {
    const foundUser = users.find((u) => u.email === email && u.password === pass)
    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem('app_auth_user', JSON.stringify(foundUser))
      return foundUser
    }
    return null
  }

  const register = (name: string, email: string, pass: string) => {
    const isFirstUser = users.length === 0
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password: pass,
      role: isFirstUser ? 'admin' : 'broker',
    }
    const newUsers = [...users, newUser]
    setUsers(newUsers)
    localStorage.setItem('app_users', JSON.stringify(newUsers))

    setUser(newUser)
    localStorage.setItem('app_auth_user', JSON.stringify(newUser))
    return newUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('app_auth_user')
  }

  const createUser = (newUser: Omit<User, 'id'>) => {
    const u: User = { ...newUser, id: Date.now().toString() }
    const newUsers = [...users, u]
    setUsers(newUsers)
    localStorage.setItem('app_users', JSON.stringify(newUsers))
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, users, createUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
