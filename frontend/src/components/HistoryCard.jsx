export default function HistoryCard({ item }) {
  return (
    <article className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden shrink-0">
            {item?.photo ? (
              <img
                src={item.photo}
                alt={item?.name ?? "Usuario"}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

          <div>
            <h3 className="text-lg font-bold leading-none text-black">
              {item?.name ?? "Usuario"}
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              {item?.date ?? "Fecha no disponible"}
            </p>
          </div>
        </div>

        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
          {item?.status ?? "Pendiente"}
        </span>
      </div>

      <div className="mt-4 border border-orange-400 bg-[#f3ddd2] rounded-lg p-3 text-orange-500 font-semibold text-sm">
        {item?.exchange ?? "Intercambio no disponible"}
      </div>
    </article>
  );
}