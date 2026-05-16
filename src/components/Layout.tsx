import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

export default function Layout() {
  useEffect(() => {
    // Force dark mode globally for the TV dashboard
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden bg-[#020617] text-white font-sans antialiased selection:bg-blue-500/30">
      <Outlet />
    </main>
  )
}
