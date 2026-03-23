import BottomNav from "../../components/BottomNav";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileTabs from "../../components/ProfileTabs";
import ReviewCard from "../../components/ReviewCard";
import Sidebar from "../../components/SideBar";

export default function ProfileReviewsPage() {
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

  const reviews = [
    {
      id: 1,
      name: "Carlos L",
      comment: "Puntual y confiable",
      date: "10 mar 2026",
      stars: 5,
      photo: null,
    },
    {
      id: 2,
      name: "Mayo M",
      comment: "Buen trato y amable",
      date: "10 mar 2026",
      stars: 3,
      photo: null,
    },
    {
      id: 3,
      name: "Mayo M",
      comment: "Buen trato y amable",
      date: "10 mar 2026",
      stars: 5,
      photo: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#ece8e5]">
      {/* MOBILE */}
      <div className="md:hidden flex justify-center">
        <div className="w-full max-w-sm min-h-screen bg-[#f3efed] relative pb-24">
          <ProfileHeader user={user} />
          <ProfileTabs />

          <div className="bg-[#e6e0dd] px-4 py-4 space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <BottomNav />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex h-screen overflow-hidden">
        <div className="w-full h-full bg-[#ece8e5] rounded-xl overflow-hidden border border-gray-300 flex">
          <div className="sticky top-0 h-screen shrink-0">
            <Sidebar />
          </div>

          <div className="flex-1 min-w-0 min-h-0 bg-[#e6e0dd] overflow-y-scroll">
            <ProfileHeader user={user} desktop />

            <div className="px-10 border-t border-gray-300 bg-[#f3efed]">
              <ProfileTabs desktop />
            </div>

            <div className="px-6 py-4">
              <div className="max-w-4xl mx-auto space-y-4">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}