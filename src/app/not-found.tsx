import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <p className="font-manrope text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
          404
        </p>

        <h1 className="mt-5 font-playfair text-4xl font-semibold text-stone-950 md:text-6xl">
          Страница не найдена
        </h1>

        <p className="mt-5 font-manrope text-base leading-7 text-stone-600">
          Возможно, страница была удалена или адрес указан неверно.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center border border-stone-950 px-8 font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 transition-colors duration-300 hover:bg-stone-950 hover:text-white"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
