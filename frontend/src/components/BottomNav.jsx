import { useLocation, useNavigate } from 'react-router-dom'

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#f4f1ef] border-t border-gray-200 px-6 py-2 z-50">
      <div className="max-w-sm mx-auto flex items-end justify-between relative">

        <button
          onClick={() => navigate('/home')}
          className={`flex flex-col items-center text-xs ${isActive('/home') ? 'text-orange-500' : 'text-gray-500'}`}
        >
          <span className="text-xl">Inicio</span>
        </button>

        <button
          onClick={() => navigate('/explore')}
          className={`flex flex-col items-center text-xs ${isActive('/explore') ? 'text-orange-500' : 'text-gray-500'}`}
        >
          <span className="text-xl">Explorar</span>
        </button>

        <div className="relative -mt-8">
          <button
            onClick={() => navigate('/create')}
            className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg border-4 border-[#f4f1ef]"
          >
            <span className="text-3xl font-light leading-none -mt-1">+</span>
          </button>
        </div>

        <button
          onClick={() => navigate('/chats')}
          className={`flex flex-col items-center text-xs ${isActive('/chats') ? 'text-orange-500' : 'text-gray-500'}`}
        >
          <span className="text-xl">Chats</span>
        </button>

        <button
          onClick={() => navigate('/profile/publications')}
          className={`flex flex-col items-center text-xs ${isActive('/profile') ? 'text-orange-500' : 'text-gray-500'}`}
        >
          <span className="text-xl">Perfil</span>
        </button>

      </div>
    </div>
  )
}