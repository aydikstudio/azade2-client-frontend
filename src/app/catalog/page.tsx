import { CategoryCard } from "@/shared/ui/CategoryCard/CategoryCard";

const catalogSections = [
  {
    id: "rings",
    title: "Кольца",
    items: [
      {
        title: "Все кольца",
        href: "/catalog/rings",
        image: "/images/categories/rings.jpg",
      },
      {
        title: "Обручальные кольца",
        href: "/catalog/rings?type=wedding",
        image: "/images/catalog/wedding-rings.jpg",
      },
      {
        title: "Помолвочные кольца",
        href: "/catalog/rings?type=engagement",
        image: "/images/catalog/engagement-rings.jpg",
      },
      {
        title: "Кольца с камнями",
        href: "/catalog/rings?insert=stones",
        image: "/images/catalog/stone-rings.jpg",
      },
    ],
  },
  {
    id: "earrings",
    title: "Серьги",
    items: [
      {
        title: "Все серьги",
        href: "/catalog/earrings",
        image: "/images/categories/earrings.jpg",
      },
      {
        title: "Детские серьги",
        href: "/catalog/earrings?type=kids",
        image: "/images/catalog/kids-earrings.jpg",
      },
      {
        title: "Серьги с камнями",
        href: "/catalog/earrings?insert=stones",
        image: "/images/catalog/stone-earrings.jpg",
      },
      {
        title: "Пусеты",
        href: "/catalog/earrings?type=studs",
        image: "/images/catalog/studs.jpg",
      },
    ],
  },
  {
    id: "bracelets",
    title: "Браслеты",
    items: [
      {
        title: "Все браслеты",
        href: "/catalog/bracelets",
        image: "/images/categories/bracelets.jpg",
      },
      {
        title: "Жёсткие браслеты",
        href: "/catalog/bracelets?type=rigid",
        image: "/images/catalog/rigid-bracelets.jpg",
      },
      {
        title: "Браслеты с камнями",
        href: "/catalog/bracelets?insert=stones",
        image: "/images/catalog/stone-bracelets.jpg",
      },
    ],
  },
  {
    id: "chains",
    title: "Цепи",
    items: [
      {
        title: "Все цепи",
        href: "/catalog/chains",
        image: "/images/categories/chains.jpg",
      },
      {
        title: "Якорное плетение",
        href: "/catalog/chains?weave=anchor",
        image: "/images/catalog/anchor-chains.jpg",
      },
      {
        title: "Панцирное плетение",
        href: "/catalog/chains?weave=curb",
        image: "/images/catalog/curb-chains.jpg",
      },
    ],
  },
];

export const metadata = {
  title: "Каталог",
  description: "Каталог украшений AZADE",
};

export default function CatalogPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <h1 className="font-playfair text-5xl font-semibold text-stone-950 md:text-7xl">
          Каталог
        </h1>

        <nav className="mt-10 flex flex-wrap gap-3">
          {catalogSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="border border-stone-200 px-5 py-3 font-manrope text-xs font-semibold uppercase tracking-[0.16em] text-stone-700 transition-colors duration-300 hover:border-stone-950 hover:text-stone-950"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        {catalogSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border-t border-stone-200 py-16"
          >
            <h2 className="font-playfair text-4xl font-semibold text-stone-950 md:text-5xl">
              {section.title}
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {section.items.map((item, index) => (
                <CategoryCard
                  key={item.href}
                  title={item.title}
                  href={item.href}
                  image={item.image}
                  index={index}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
