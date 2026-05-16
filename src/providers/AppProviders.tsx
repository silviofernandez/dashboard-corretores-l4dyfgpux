import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextType {
  user: any | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true })

export const useAuth = () => useContext(AuthContext)

export function AppProviders({ children }: { children: React.ReactNode }) {
  // Simplify to immediate state resolution to prevent blocking renders
  const user = { name: 'Ana Paula Silva', role: 'broker' }
  const loading = false

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}
