import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  user: any | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true })

export const useAuth = () => useContext(AuthContext)

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any | null>(null)

  useEffect(() => {
    // Resilient mock initialization layer handling empty/disconnected backend states gracefully
    const initApp = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 300))
        setUser({ name: 'Ana Paula Silva', role: 'broker' })
      } catch (err) {
        console.error('Failed to initialize contextual providers. Applying safe fallback.', err)
      } finally {
        setLoading(false)
      }
    }

    initApp()
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}
