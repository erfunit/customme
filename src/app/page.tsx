import Footer from "@/components/layout/footer/footer";
import Navbar from "@/components/layout/navbar";
import Navigations from "@/components/layout/navigations";
import TopBanner from "@/components/layout/top-banner";

export default function Page() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <div>
        <TopBanner />
        <Navbar />
        <hr className="h-[1px] w-full bg-gray-4" />
        <Navigations />
        <main className="container">
          <h1 className="heading-1">سلام!</h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}
