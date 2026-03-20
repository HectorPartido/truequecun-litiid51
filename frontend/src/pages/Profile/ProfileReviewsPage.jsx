import BottomNav from "../../components/BottomNav";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileSidebar from "../../components/ProfileSidebar";
import ProfileTabs from "../../components/ProfileTabs";
import ReviewCard from "../../components/ReviewCard";

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
    <div className="min-h-screen bg-[#1f1f1f]">
      {/* MOBILE */}
      <div className="md:hidden flex justify-center">
        <div className="w-full max-w-sm min-h-screen bg-[#f3efed] relative pb-24">
          <ProfileHeader user={user} />
          <ProfileTabs />

          <main className="bg-[#e6e0dd] px-4 py-4 space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </main>

          <BottomNav />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex min-h-screen p-2 lg:p-3">
        <div className="w-full bg-[#ece8e5] rounded-xl overflow-hidden shadow-xl border border-gray-300 flex">
          <ProfileSidebar />

          <div className="flex-1 flex flex-col min-w-0">
            <ProfileHeader user={user} desktop />

            <div className="flex-1 bg-[#e6e0dd] px-6 py-4 overflow-y-auto">
              <div className="max-w-4xl mx-auto space-y-3">
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    desktop
                  />
                ))}
              </div>
            </div>

            <div className="px-10 border-t border-gray-300 bg-[#f3efed]">
              <ProfileTabs desktop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}