import { FilterSidebar } from "@/features/catalog/components/FilterSidebar";
import { ProductCard } from "@/features/catalog/components/ProductCard";
import { SortSelect } from "@/features/catalog/components/SortSelect";
import { ringsFilters } from "@/features/catalog/config/ringsFilters";
import { ringsProducts } from "@/features/catalog/data/ringsProducts";

export const metadata = {
  title: "Кольца",
  description: "Кольца AZADE",
};

export default function RingsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="font-playfair text-5xl font-semibold text-stone-950 md:text-7xl">
          Кольца
        </h1>

        <div className="mt-12 flex gap-10">
          <FilterSidebar filters={ringsFilters} />

          <div className="flex-1">
            <div className="mb-8 flex items-center justify-between gap-4">
              <p className="font-manrope text-sm text-stone-500">
                {ringsProducts.length} изделия
              </p>

              <SortSelect />
            </div>

            <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {ringsProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
