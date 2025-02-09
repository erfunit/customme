import { Categories } from "@/components/module/home/categories";
import Hero from "@/components/module/home/hero";
import ProductsPreview from "@/components/module/home/products-preview";

export default function Page() {
  return (
    <div>
      <Hero />
      <Categories />
      <ProductsPreview />
    </div>
  );
}
