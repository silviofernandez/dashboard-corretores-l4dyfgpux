import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Role = 'admin' | 'broker'

export type User = {
  id: string
  name: string
  email: string
  role: Role
  password?: string
}

export type Training = {
  id: string
  theme: string
  date: string
  time: string
}

type AuthContextType = {
  user: User | null
  users: User[]
  loading: boolean
  trainings: Training[]
  login: (email: string, pass: string) => User | null
  register: (name: string, email: string, pass: string) => User
  logout: () => void
  createUser: (user: Omit<User, 'id'>) => void
  addTraining: (t: Omit<Training, 'id'>) => void
  deleteTraining: (id: string) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('mock_users')
    if (saved) return JSON.parse(saved)
    return []
  })

  const [trainings, setTrainings] = useState<Training[]>(() => {
    const saved = localStorage.getItem('mock_trainings')
    if (saved) return JSON.parse(saved)
    return [
      {
        id: 't1',
        theme: 'Masterclass: Fidelização de Clientes',
        date: '2026-06-10',
        time: '14:00',
      },
      {
        id: 't2',
        theme: 'Estratégias de Follow-up e Reengajamento',
        date: '2026-06-15',
        time: '10:00',
      },
      { id: 't3', theme: 'Treinamento Intensivo de Negociação', date: '2026-06-20', time: '16:00' },
    ]
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('mock_users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    localStorage.setItem('mock_trainings', JSON.stringify(trainings))
  }, [trainings])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const login = (email: string, pass: string) => {
    const found = users.find((u) => u.email === email && u.password === pass)
    if (found) {
      setUser(found)
    }
    return found || null
  }

  const register = (name: string, email: string, pass: string) => {
    const isFirstUser = users.length === 0
    const role = isFirstUser ? 'admin' : 'broker'
    const newUser: User = { id: Date.now().toString(), name, email, role, password: pass }
    setUsers([...users, newUser])
    setUser(newUser)
    return newUser
  }

  const logout = () => setUser(null)

  const createUser = (u: Omit<User, 'id'>) => {
    setUsers([...users, { ...u, id: Date.now().toString() }])
  }

  const addTraining = (t: Omit<Training, 'id'>) => {
    setTrainings([...trainings, { ...t, id: Date.now().toString() }])
  }

  const deleteTraining = (id: string) => {
    setTrainings(trainings.filter((t) => t.id !== id))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        loading,
        trainings,
        login,
        register,
        logout,
        createUser,
        addTraining,
        deleteTraining,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
