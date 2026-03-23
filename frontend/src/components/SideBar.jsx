import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    const { usuario } = useAuth()

    const isActive = (path) => {
        if (path === '/profile/publications') {
            return location.pathname.startsWith('/profile')
        }

        return location.pathname === path
    }

    const navItem = (label, path) => (
        <button
            onClick={() => navigate(path)}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl w-full text-sm transition-colors ${isActive(path) ? 'bg-orange-500 text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'
                }`}
        >
            {label}
        </button>
    )

    return (
        <aside className="hidden md:flex flex-col w-56 min-h-screen bg-[#F5F0EB] border-r border-gray-200 px-4 py-6 gap-4">

            {/* Logo */}
            <div className="flex items-center gap-2 mb-2">
                <img src="/logo.svg" alt="TruequeCun" className="h-9" />
                <span className="text-lg font-bold">
                    <span className="text-gray-800">Trueque</span>
                    <span className="text-orange-500">Cun</span>
                </span>
            </div>

            {/* Perfil */}
            <div className="flex items-center gap-3 px-3 py-3 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                    <p className="text-sm font-semibold text-gray-800">
                        {usuario?.nombre ?? 'Invitado'}
                    </p>
                    <p className="text-xs text-gray-400">Perfil</p>
                </div>
            </div>

            {/* Navegación principal */}
            <nav className="flex flex-col gap-1">
                {navItem('Inicio', '/home')}
                {navItem('Explorar', '/explore')}
                <button
                    onClick={() => navigate('/create')}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl w-full text-sm bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
                >
                    <span>+</span>
                    Publicar
                </button>
            </nav>

            {/* Mis publicaciones */}
            <div>
                <p className="text-xs text-gray-400 font-semibold uppercase px-3 mb-1">Mis publicaciones</p>
                <nav className="flex flex-col gap-1">

                    {navItem('Chat', '/chats')}
                    {navItem('Favoritos', '/favorites')}
                   {navItem('Perfil', '/profile/publications')}

                </nav>
            </div>

            {/* Abajo */}
            <div className="mt-auto flex flex-col gap-1">
                {navItem('Configuración', '/settings')}
                {navItem('Soporte', '/support')}
            </div>

        </aside>
    )
}