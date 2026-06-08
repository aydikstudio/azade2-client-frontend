import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
const navItems = [
  { label: "Кольца", href: "/catalog/" },
  { label: "Серьги", href: "/catalog" },
  { label: "Браслеты", href: "/catalog" },
  { label: "Цепи", href: "/catalog" },
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
            height={60}
            className="animate-[logoIntro_1.4s_ease-out_forwards]"
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
        className="mx-auto py-8  flex max-w-7xl items-center justify-center gap-8 overflow-x-auto border-t border-stone-100 px-4 py-3 text-sm font-medium text-stone-700 sm:px-6 lg:px-8"
        aria-label="Основное меню"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-manrope shrink-0 transition-colors hover:text-stone-950"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
