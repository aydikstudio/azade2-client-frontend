"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <p className="font-manrope text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
          Ошибка
        </p>

        <h1 className="mt-5 font-playfair text-4xl font-semibold text-stone-950 md:text-6xl">
          Что-то пошло не так
        </h1>

        <p className="mt-5 font-manrope text-base leading-7 text-stone-600">
          Попробуйте обновить страницу или вернуться на главную.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex h-12 items-center justify-center border border-stone-950 bg-stone-950 px-8 font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-stone-950"
          >
            Обновить
          </button>

          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center border border-stone-950 px-8 font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 transition-colors duration-300 hover:bg-stone-950 hover:text-white"
          >
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
