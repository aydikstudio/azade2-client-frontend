import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export function ProductCard({ id, title, price, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="font-manrope text-sm text-stone-900">{title}</h3>

        <p className="mt-2 font-manrope text-sm font-medium text-stone-950">
          {price.toLocaleString("ru-RU")} ₽
        </p>
      </div>
    </Link>
  );
}
