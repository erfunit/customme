import Navbar from "@/components/layout/navbar";
import Navigations from "@/components/layout/navigations";
import TopBanner from "@/components/layout/top-banner";
import { Button } from "@/components/ui/button";
import { Designtools } from "iconsax-react";

export default function Page() {
  return (
    <div className="w-screen min-h-screen">
      <TopBanner />
      <Navbar />
      <hr className="h-[1px] w-full bg-gray-4" />
      <Navigations />
      <main className="container">
        <h1 className="heading-1">سلام!</h1>
        <Button
          variant="fill"
          size="md"
          width="lg"
          color="primary"
          Icon={Designtools}
        >
          من را بفشار!
        </Button>
      </main>
    </div>
  );
}
