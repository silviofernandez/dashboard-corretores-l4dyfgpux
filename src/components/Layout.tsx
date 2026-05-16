import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="min-h-screen bg-[#020617] w-full flex flex-col font-sans">
      <Outlet />
    </div>
  )
}
