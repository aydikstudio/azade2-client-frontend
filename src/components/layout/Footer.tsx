import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <a
              href="mailto:info@azade.ru"
              className="font-manrope text-sm text-stone-900 transition-opacity duration-300 hover:opacity-60"
            >
              info@azade.ru
            </a>
          </div>

          <nav className="flex flex-col gap-4">
            <Link
              href="/catalog"
              className="font-manrope text-sm text-stone-700 transition-colors duration-300 hover:text-stone-950"
            >
              Каталог
            </Link>

            <Link
              href="/about"
              className="font-manrope text-sm text-stone-700 transition-colors duration-300 hover:text-stone-950"
            >
              О бренде
            </Link>
          </nav>
        </div>

        <div className="mt-16 border-t border-stone-200 pt-6">
          <p className="font-manrope text-xs text-stone-500">
            © 2020–{new Date().getFullYear()} AZADE. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
