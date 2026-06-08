"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero/hero-1-v4.png",
    title: "Украшения вне времени",
    description:
      "Современный взгляд на ювелирное искусство, где каждая деталь создаёт ощущение спокойной роскоши.",
  },
  {
    image: "/images/hero/hero-2-v4.png",
    title: "Эстетика в деталях",
    description:
      "Лаконичные формы, благородные материалы и украшения, которые становятся частью вашего образа.",
  },
  {
    image: "/images/hero/hero-3-v4.png",
    title: "Создано для особых моментов",
    description: "Ювелирные изделия для моментов, которые хочется сохранить.",
  },
  {
    image: "/images/hero/hero-4-v4.png",
    title: "Искусство быть собой",
    description:
      "Украшения, которые подчёркивают индивидуальность и становятся естественным продолжением вашего образа.",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden bg-stone-50">
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          sizes="100vw"
          priority={index === 0}
          className={`
            object-cover
            transition-all
            duration-[1800ms]
            ease-in-out
            ${
              activeSlide === index
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }
          `}
        />
      ))}

      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 mx-auto flex h-[72vh] max-w-7xl items-center px-6">
        <div
          key={currentSlide.title}
          className="max-w-xl animate-[fadeUp_900ms_ease-out]"
        >
          <p className="font-manrope text-xs font-medium uppercase tracking-[0.28em] text-stone-700">
            AZADE Jewellery
          </p>

          <h1 className="mt-5 font-playfair text-5xl font-semibold leading-tight text-stone-950 md:text-7xl">
            {currentSlide.title}
          </h1>

          <p className="mt-6 max-w-lg font-manrope text-base leading-7 text-stone-700 md:text-lg">
            {currentSlide.description}
          </p>

          <Link
            href="/catalog"
            className="mt-10 inline-flex h-12 items-center justify-center border border-stone-950 px-8 font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 transition-colors duration-300 hover:bg-stone-950 hover:text-white"
          >
            Смотреть коллекцию
          </Link>
        </div>
      </div>
    </section>
  );
}
