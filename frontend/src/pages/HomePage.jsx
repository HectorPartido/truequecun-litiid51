import BottomNav from '../components/BottomNav'
import Sidebar from '../components/SideBar'
import PublicationCard from '../components/PublicationCard'
import { usePublications } from '../context/PublicationsContext'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const { publicaciones } = usePublications()
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-[#F5F0EB]">

      {/* Sidebar solo en desktop */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex-1 pb-24 md:pb-6">

        {/* Navbar superior - solo mobile */}
        <header className="md:hidden bg-[#F5F0EB] px-4 pt-6 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="TruequeCun" className="h-10" />
            <span className="text-xl font-bold">
              <span className="text-gray-800">Trueque</span>
              <span className="text-orange-500">Cun</span>
            </span>
          </div>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </header>

        {/* Navbar superior - solo desktop */}
        <header className="hidden md:flex bg-[#F5F0EB] px-6 pt-6 pb-3 items-center justify-between">
          <div /> 
          <div className="flex-1 max-w-md mx-6">
            <div className="flex items-center bg-white rounded-xl px-4 py-2 gap-2 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar objetos o servicios"
                className="bg-transparent text-sm text-gray-500 outline-none w-full"
              />
            </div>
          </div>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </header>

        {/* Barra de búsqueda - solo mobile */}
        <div className="md:hidden px-4 mb-4">
          <div className="flex items-center bg-white rounded-xl px-4 py-2 gap-2 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar objetos o servicios"
              className="bg-transparent text-sm text-gray-500 outline-none w-full"
            />
          </div>
        </div>

        {/* Sección recientes */}
        <div className="px-4 md:px-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Recientes</h2>

          {publicaciones.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
              <p className="text-gray-400 text-sm">Aún no hay publicaciones</p>
              <p className="text-gray-400 text-xs mt-1">¡Sé el primero en publicar algo!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {publicaciones.map((pub) => (
                <div key={pub.id} onClick={() => navigate(`/publication/${pub.id}`)} className="cursor-pointer">
                  <PublicationCard publication={pub} />
                  <div className="flex items-center gap-2 mt-2 px-1">
                    <div className="w-7 h-7 rounded-full bg-gray-300" />
                    <span className="text-xs text-gray-600">{pub.user?.name}</span>
                    <span className="text-orange-400 text-xs">★ {pub.user?.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Bottom nav solo mobile */}
      <BottomNav />

    </div>
  )
}