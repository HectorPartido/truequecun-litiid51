import { NavLink } from "react-router-dom";

export default function ProfileTabs({ desktop = false }) {
  const baseClass = desktop
    ? "block w-full text-center py-3 text-sm font-medium border-b-2"
    : "block w-full text-center pb-2 text-xl font-semibold border-b-4";

  const getClass = ({ isActive }) =>
    `${baseClass} transition ${
      isActive
        ? "text-orange-500 border-orange-500"
        : "text-gray-400 border-transparent"
    }`;

  return (
    <div className={desktop ? "bg-[#f3efed]" : "bg-[#e9e3e0] px-4 pt-4"}>
      <nav aria-label="Secciones del perfil">
      <ul className="flex list-none m-0 p-0">
        <li className="flex-1">
          <NavLink to="/profile/publications" className={getClass}>
            Publicaciones
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink to="/profile/history" className={getClass}>
            Historial
          </NavLink>
        </li>

        <li className="flex-1">
          <NavLink to="/profile/reviews" className={getClass}>
            Reseñas
          </NavLink>
        </li>
      </ul>
      </nav>
    </div>
  );
}