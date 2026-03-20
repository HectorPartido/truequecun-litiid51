import BottomNav from "../../components/BottomNav";
import HistoryCard from "../../components/HistoryCard";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileTabs from "../../components/ProfileTabs";

export default function ProfileHistoryPage() {
  const user = {
    name: "Carlos Leal",
    location: "Cancún, Q. Roo",
    rating: 3.5,
    reviewsCount: 24,
    tradesCount: 5,
    activePostsCount: 2,
    monthsInApp: 3,
    photo: null,
  };

  const history = [
    {
      id: 1,
      name: "Carlos L",
      date: "10 mar 2026",
      status: "Completado",
      exchange: "Bicicleta - Tablet",
      photo: null,
    },
    {
      id: 2,
      name: "Mayo M",
      date: "02 mar 2026",
      status: "Completado",
      exchange: "Libros - Libros",
      photo: null,
    },
    {
      id: 3,
      name: "Raziel G",
      date: "10 mar 2026",
      status: "Completado",
      exchange: "Monitor de computadora - Mouse gamer",
      photo: null,
    },
    {
      id: 4,
      name: "Alma V",
      date: "10 mar 2026",
      status: "Completado",
      exchange: "Gorras - Zapatos",
      photo: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <div className="md:hidden flex justify-center">
        <div className="w-full max-w-sm min-h-screen bg-[#f3efed] relative pb-24">
          <ProfileHeader user={user} />
          <ProfileTabs />
          <main className="bg-[#e6e0dd] px-4 py-4 space-y-4">
            {history.map((item) => (
              <HistoryCard key={item.id} item={item} />
            ))}
          </main>
          <BottomNav />
        </div>
      </div>

      <div className="hidden md:flex min-h-screen p-2 lg:p-3">
        <div className="w-full bg-[#ece8e5] rounded-xl overflow-hidden shadow-xl border border-gray-300 flex">
          <ProfileSidebar />

          <div className="flex-1 flex flex-col">
            <ProfileHeader user={user} desktop />

            <div className="flex-1 bg-[#e6e0dd] px-6 py-4 overflow-y-auto">
              <div className="max-w-4xl mx-auto space-y-4">
                {history.map((item) => (
                  <HistoryCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="px-10 border-t border-gray-300">
              <ProfileTabs desktop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}