import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  user: any | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true })

export const useAuth = () => useContext(AuthContext)

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate safe resolution to prevent blocking renders
    const timer = setTimeout(() => {
      setUser({ name: 'Ana Paula Silva', role: 'broker' })
      setLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}
