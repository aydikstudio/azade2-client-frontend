import Image from "next/image";
import { product } from "@/features/catalog/data/product";

export default function ProductPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {product.media.map((item, index) =>
              item.type === "image" ? (
                <div
                  key={index}
                  className="relative aspect-[4/5] overflow-hidden bg-stone-100"
                >
                  <Image
                    src={item.src}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <video key={index} controls className="w-full">
                  <source src={item.src} type="video/mp4" />
                </video>
              ),
            )}
          </div>

          <div className="sticky top-28 h-fit">
            <h1 className="font-playfair text-4xl text-stone-950">
              {product.title}
            </h1>

            <p className="mt-3 font-manrope text-sm text-stone-500">
              Артикул: {product.article}
            </p>

            <p className="mt-8 font-manrope text-3xl font-medium text-stone-950">
              {product.price.toLocaleString("ru-RU")} ₽
            </p>

            <div className="mt-12 border-t border-stone-200 pt-8">
              <h2 className="font-manrope text-xs uppercase tracking-[0.18em] text-stone-500">
                Характеристики
              </h2>

              <div className="mt-6 space-y-4">
                {product.characteristics.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between border-b border-stone-100 pb-3"
                  >
                    <span className="text-stone-500">{item.label}</span>

                    <span className="text-stone-950">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-stone-200 pt-8">
              <h2 className="font-manrope text-xs uppercase tracking-[0.18em] text-stone-500">
                Описание
              </h2>

              <p className="mt-4 font-manrope leading-7 text-stone-600">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
