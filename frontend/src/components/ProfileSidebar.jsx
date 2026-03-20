export default function ProfileSidebar() {
  return (
    <aside className="hidden md:flex md:w-[220px] lg:w-[240px] bg-[#d9d6d4] flex-col p-4 border-r border-gray-300 min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-orange-500"></div>
        <div className="font-bold leading-none text-sm">
          <span className="text-gray-800">Trueque</span>
          <span className="text-orange-500">Cun</span>
        </div>
      </div>

      <div className="bg-[#cfcaca] rounded-lg p-3 flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
        <div>
          <p className="font-semibold text-sm text-gray-800">Carlos</p>
          <p className="text-xs text-gray-600">Perfil</p>
        </div>
      </div>

      <nav className="flex flex-col gap-3 text-sm text-gray-700">
        <a href="#" className="hover:text-black">Inicio</a>
        <a href="#" className="hover:text-black">Explorar</a>
        <a
          href="#"
          className="bg-orange-500 text-white px-3 py-1.5 rounded-md text-center font-medium"
        >
          Publicar
        </a>

        <p className="mt-4 text-xs font-semibold text-gray-500 uppercase">
          Mis publicaciones
        </p>

        <a href="#" className="hover:text-black">Explorar</a>
        <a href="#" className="hover:text-black">Chat</a>
        <a href="#" className="hover:text-black">Favoritos</a>
        <a href="#" className="hover:text-black">Perfil</a>

        <hr className="my-4 border-gray-400" />

        <a href="#" className="hover:text-black">Configuración</a>
        <a href="#" className="hover:text-black">Ayuda</a>
      </nav>
    </aside>
  );
}