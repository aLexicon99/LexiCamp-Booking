import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampgroundCard from "@/components/CampgroundCard";
import { mockCampgrounds } from "@/data/mockCampgrounds";

export default function Home() {
  return (
    <>
      <Header />

      <main className="p-6">
        <h1 className="mb-6 text-2xl font-bold">HEM</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockCampgrounds.map((campground) => (
            <CampgroundCard
              key={campground.id}
              campground={campground}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}