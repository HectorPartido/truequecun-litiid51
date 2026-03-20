export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#f4f1ef] border-t border-gray-200 px-6 py-2 z-50">
      <div className="max-w-sm mx-auto flex items-end justify-between relative">
        <div className="flex flex-col items-center text-gray-500 text-xs">
          <span className="text-xl">Inicio</span>
        </div>

        <div className="flex flex-col items-center text-gray-500 text-xs">
          <span className="text-xl">Explorar</span>
        </div>

        <div className="relative -mt-8">
          <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-base shadow-lg border-4 border-[#f4f1ef] font-semibold">
            Publicar
          </div>
        </div>

        <div className="flex flex-col items-center text-gray-500 text-xs">
          <span className="text-xl">Chats</span>
        </div>

        <div className="flex flex-col items-center text-orange-500 text-xs">
          <span className="text-xl">Perfil</span>
        </div>
      </div>
    </div>
  );
}