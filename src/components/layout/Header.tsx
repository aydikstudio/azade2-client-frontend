import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
const navItems = [
  { label: "Кольца", href: "/catalog/rings" },
  { label: "Серьги", href: "/catalog/earrings" },
  { label: "Браслеты", href: "/catalog/bracelets" },
  { label: "Цепи", href: "/catalog/chains" },
];

export function Header() {
  return (
    <header className="sticky  top-0 z-50  border-stone-200 bg-white">
      <div className="relative flex py-15 h-20 w-full items-center justify-center px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center justify-center"
          aria-label="AZADE, главная страница"
        >
          <Image
            src="/images/logo.png"
            alt="AZADE"
            width={120}
            height={40}
            priority
            unoptimized
            className="h-18 object-contain"
            style={{ width: "auto" }}
          />
        </Link>

        <Link
          href="/search"
          className="absolute right-4 flex h-10 w-10 items-center justify-center text-stone-700 transition-colors hover:text-stone-950 sm:right-6 lg:right-10"
          aria-label="Поиск"
        >
          <Search size={20} strokeWidth={1.8} />
        </Link>
      </div>

      <nav
        className="mx-auto py-8 flex max-w-7xl items-center justify-center gap-8 overflow-x-auto border-t border-stone-100 px-4 py-3 text-sm font-medium text-stone-700 sm:px-6 lg:px-8"
        aria-label="Основное меню"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 transition-colors hover:text-stone-950"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
