export default function ProfileHeader({ user, desktop = false }) {
  if (desktop) {
    return (
      <div className="px-6 py-4 bg-[#f3efed]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden shrink-0">
              {user?.photo ? (
                <img
                  src={user.photo}
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black leading-none">
                {user?.name ?? "Carlos Leal"}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {user?.location ?? "Cancún, Q. Roo"}
              </p>

              <p className="text-sm text-gray-500">
                {user?.rating ?? 3.5} ({user?.reviewsCount ?? 24} reseñas)
              </p>
            </div>
          </div>

          <button
            type="button"
            className="text-gray-500 border border-gray-400 rounded-lg px-2 py-1 text-sm"
          >
            Editar
          </button>
        </div>

        <div className="mt-4 grid grid-cols-3 text-center max-w-2xl">
          <div>
            <p className="text-3xl font-bold text-black">
              {user?.tradesCount ?? 5}
            </p>
            <p className="text-gray-500 text-sm mt-1">Trueques</p>
          </div>

          <div className="border-x border-gray-300">
            <p className="text-3xl font-bold text-black">
              {user?.activePostsCount ?? 2}
            </p>
            <p className="text-gray-500 text-sm mt-1">Publicaciones Activas</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-black">
              {user?.monthsInApp ?? 3}
            </p>
            <p className="text-gray-500 text-sm mt-1">Meses en TruequeCun</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 pb-3 bg-[#f3efed]">
      <div className="flex items-start justify-between">
        <h1 className="text-2xl font-bold text-black">Perfil</h1>

        <button
          type="button"
          className="w-10 h-10 rounded-xl border border-gray-400 flex items-center justify-center text-gray-600 text-sm"
        >
          Editar
        </button>
      </div>

      <div className="mt-4 flex gap-4">
        <div className="w-20 h-20 rounded-full bg-gray-300 shrink-0 overflow-hidden">
          {user?.photo ? (
            <img
              src={user.photo}
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        <div>
          <h2 className="text-3xl font-bold leading-none text-black">
            {user?.name ?? "Hector P"}
          </h2>

          <p className="text-lg text-gray-500 mt-2">
            {user?.location ?? "Cancún, Q. Roo"}
          </p>

          <p className="text-lg text-gray-500">
            {user?.rating ?? 3.5} ({user?.reviewsCount ?? 24} reseñas)
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 text-center">
        <div>
          <p className="text-5xl font-bold text-black">
            {user?.tradesCount ?? 5}
          </p>
          <p className="text-gray-500 mt-1">Trueques</p>
        </div>

        <div className="border-l border-r border-gray-400 px-2">
          <p className="text-5xl font-bold text-black">
            {user?.activePostsCount ?? 2}
          </p>
          <p className="text-gray-500 mt-1">Publicaciones Activas</p>
        </div>

        <div>
          <p className="text-5xl font-bold text-black">
            {user?.monthsInApp ?? 3}
          </p>
          <p className="text-gray-500 mt-1">Meses en TruequeCun</p>
        </div>
      </div>
    </div>
  );
}