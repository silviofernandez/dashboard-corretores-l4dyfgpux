import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Role = 'admin' | 'broker'

export type User = {
  id: string
  name: string
  email: string
  role: Role
}

export type Training = {
  id: string
  theme: string
  date: string
  time: string
  description?: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  users: User[]
  trainings: Training[]
  login: (email: string, password?: string) => User | null
  register: (name: string, email: string, password?: string) => User
  logout: () => void
  addTraining: (training: Omit<Training, 'id'>) => void
  deleteTraining: (id: string) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<User[]>([])
  const [trainings, setTrainings] = useState<Training[]>([
    {
      id: '1',
      theme: 'Técnicas de Fechamento Avançado',
      date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      time: '14:00',
      description: 'Aprenda a fechar vendas mais rápido com gatilhos mentais.',
    },
  ])

  useEffect(() => {
    const storedUsers = localStorage.getItem('mock_users')
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    }

    const storedUser = localStorage.getItem('mock_current_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    const storedTrainings = localStorage.getItem('mock_trainings')
    if (storedTrainings) {
      setTrainings(JSON.parse(storedTrainings))
    }

    setLoading(false)
  }, [])

  const login = (email: string, password?: string) => {
    const foundUser = users.find((u) => u.email === email)
    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem('mock_current_user', JSON.stringify(foundUser))
      return foundUser
    }
    return null
  }

  const register = (name: string, email: string, password?: string) => {
    // Role-based logic: If no users exist, the first registered user is Admin Master
    const role: Role = users.length === 0 ? 'admin' : 'broker'
    const newUser: User = { id: Date.now().toString(), name, email, role }

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    localStorage.setItem('mock_users', JSON.stringify(updatedUsers))

    setUser(newUser)
    localStorage.setItem('mock_current_user', JSON.stringify(newUser))

    return newUser
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('mock_current_user')
  }

  const addTraining = (training: Omit<Training, 'id'>) => {
    const newTrainings = [...trainings, { ...training, id: Date.now().toString() }]
    setTrainings(newTrainings)
    localStorage.setItem('mock_trainings', JSON.stringify(newTrainings))
  }

  const deleteTraining = (id: string) => {
    const newTrainings = trainings.filter((t) => t.id !== id)
    setTrainings(newTrainings)
    localStorage.setItem('mock_trainings', JSON.stringify(newTrainings))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        users,
        trainings,
        login,
        register,
        logout,
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
