export default function ReviewCard({ review, desktop = false }) {
  const stars = review?.stars ?? 0;
  const fullStars = "★".repeat(stars);
  const emptyStars = "★".repeat(5 - stars);

  if (desktop) {
    return (
      <article className="bg-white rounded-lg px-4 py-3 shadow-sm border border-[#ece7e4]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0 overflow-hidden">
              {review?.photo ? (
                <img
                  src={review.photo}
                  alt={review?.name ?? "Usuario"}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-black leading-none">
                {review?.name ?? "Usuario"}
              </h3>

              <p className="text-[10px] text-gray-700 mt-1 truncate">
                {review?.comment ?? "Sin comentario"}
              </p>

              <p className="text-[9px] text-gray-400 mt-3">
                {review?.date ?? "Fecha no disponible"}
              </p>
            </div>
          </div>

          <div className="text-orange-500 text-sm tracking-[2px] shrink-0 leading-none">
            {fullStars}
            <span className="text-gray-300">{emptyStars}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between items-start gap-3">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden shrink-0">
            {review?.photo ? (
              <img
                src={review.photo}
                alt={review?.name ?? "Usuario"}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold leading-none text-black">
              {review?.name ?? "Usuario"}
            </h3>

            <p className="text-gray-700 text-base md:text-lg mt-3 font-semibold">
              {review?.comment ?? "Sin comentario"}
            </p>
          </div>
        </div>

        <div className="text-orange-500 text-sm md:text-lg tracking-wide whitespace-nowrap">
          {fullStars}
          <span className="text-gray-300">{emptyStars}</span>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        {review?.date ?? "Fecha no disponible"}
      </p>
    </article>
  );
}