import { Categories } from "@/components/module/home/categories";
import Hero from "@/components/module/home/hero";
import ProductsPreview from "@/components/module/home/products-preview";
import SpecialSell from "@/components/module/home/special-sell/speciall-sell";

export default function Page() {
  return (
    <div>
      <Hero />
      <Categories />
      <ProductsPreview />
      <SpecialSell />
    </div>
  );
}
