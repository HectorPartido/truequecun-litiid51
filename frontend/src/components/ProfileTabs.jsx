import { NavLink } from "react-router-dom";

export default function ProfileTabs({ desktop = false }) {
  const baseClass = desktop
    ? "flex-1 text-center py-3 text-sm font-medium border-b-2"
    : "flex-1 text-center pb-2 text-xl font-semibold border-b-4";

  const getClass = ({ isActive }) =>
    `${baseClass} transition ${
      isActive
        ? "text-orange-500 border-orange-500"
        : "text-gray-400 border-transparent"
    }`;

  return (
    <div className={desktop ? "bg-[#f3efed]" : "bg-[#e9e3e0] px-4 pt-4"}>
      <div className="flex">
        <NavLink to="/profile/publications" className={getClass}>
          Publicaciones
        </NavLink>

        <NavLink to="/profile/history" className={getClass}>
          Historial
        </NavLink>

        <NavLink to="/profile/reviews" className={getClass}>
          Reseñas
        </NavLink>
      </div>
    </div>
  );
}