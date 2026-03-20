export default function PublicationCard({ publication }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="h-40 md:h-44 bg-gray-300 flex items-center justify-center overflow-hidden">
        {publication?.image ? (
          <img
            src={publication.image}
            alt={publication?.title ?? "Publicación"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 border-4 border-gray-400"></div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-black">
              {publication?.title ?? "Sin título"}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              {publication?.description ?? "Sin descripción"}
            </p>
          </div>

          <span className="bg-orange-100 text-orange-500 text-[10px] md:text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
            {publication?.type ?? "Tipo"}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-green-600 font-semibold text-xs md:text-sm">
            {publication?.status ?? "Sin estado"}
          </span>

          <span className="bg-[#e7dbd4] text-gray-600 text-[10px] md:text-xs px-3 py-1 rounded-full">
            {publication?.condition ?? "Condición"}
          </span>

          <span className="bg-[#e7dbd4] text-gray-600 text-[10px] md:text-xs px-3 py-1 rounded-full">
            {publication?.category ?? "Categoría"}
          </span>
        </div>
      </div>
    </article>
  );
}