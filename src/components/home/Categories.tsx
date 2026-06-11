import { CategoryCard } from "@/shared/ui/CategoryCard/CategoryCard";
import Link from "next/link";

const categories = [
  {
    title: "Кольца",
    href: "/catalog/rings",
    image: "/images/categories/rings.jpg",
  },
  {
    title: "Серьги",
    href: "/catalog/earrings",
    image: "/images/categories/earrings.jpg",
  },
  {
    title: "Браслеты",
    href: "/catalog/bracelets",
    image: "/images/categories/bracelets.jpg",
  },
  {
    title: "Цепи",
    href: "/catalog/chains",
    image: "/images/categories/chains.jpg",
  },
];

export function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.href}
              title={category.title}
              href={category.href}
              image={category.image}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/catalog"
            className="inline-block font-playfair text-3xl text-stone-950 transition-opacity duration-300 hover:opacity-60"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
