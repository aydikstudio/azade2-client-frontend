import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  href: string;
  image: string;
  index?: number;
};

export function CategoryCard({
  title,
  href,
  image,
  index = 0,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group block animate-[fadeUp_700ms_ease-out_both]"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-125"
        />

        <div className="absolute inset-0 bg-white/60 transition-colors duration-500 " />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent p-6">
          <h3 className="font-playfair text-3xl font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
