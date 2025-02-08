import Navbar from "@/components/layout/navbar";
import Navigations from "@/components/layout/navigations";
import TopBanner from "@/components/layout/top-banner";

export default function Page() {
  return (
    <div className="w-screen min-h-screen">
      <TopBanner />
      <Navbar />
      <hr className="h-[1px] w-full bg-gray-4" />
      <Navigations />
      <main className="">
        <h1 className="heading-1 container">سلام!</h1>
      </main>
    </div>
  );
}
