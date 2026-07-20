"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  href: string;
  label: string;
  match: (path: string) => boolean;
  icon: "home" | "products" | "gallery" | "quote" | "menu";
};

const tabs: Tab[] = [
  { href: "/", label: "Home", match: (p) => p === "/", icon: "home" },
  {
    href: "/products",
    label: "Products",
    match: (p) => p.startsWith("/products") || p.startsWith("/services"),
    icon: "products",
  },
  {
    href: "/gallery",
    label: "Gallery",
    match: (p) => p.startsWith("/gallery") || p.startsWith("/projects"),
    icon: "gallery",
  },
  {
    href: "/contact",
    label: "Quote",
    match: (p) => p.startsWith("/contact"),
    icon: "quote",
  },
];

function NavIcon({ name, active }: { name: Tab["icon"]; active?: boolean }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: active ? 2.1 : 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
        </svg>
      );
    case "products":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="7" height="7" rx="1.2" />
          <rect x="14" y="4" width="7" height="7" rx="1.2" />
          <rect x="3" y="13" width="7" height="7" rx="1.2" />
          <rect x="14" y="13" width="7" height="7" rx="1.2" />
        </svg>
      );
    case "gallery":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="11" r="1.6" fill="currentColor" stroke="none" />
          <path d="M3 16l5-4 4 3 3-2 6 4" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common}>
          <path d="M4 6h16v10H8l-4 3V6z" />
          <path d="M8 10h8M8 13h5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
  }
}

type Props = {
  onMenuOpen: () => void;
  menuOpen: boolean;
};

/** Mobile bottom nav — always visible; Home / Products / Gallery / Quote / Menu. */
export function MobileBottomNav({ onMenuOpen, menuOpen }: Props) {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(0,0,0,0.06)] backdrop-blur-md lg:hidden"
      aria-label="Mobile primary"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 items-stretch px-1 pt-1.5">
        {tabs.map((tab) => {
          const active = tab.match(pathname);
          return (
            <li key={tab.href} className="min-w-0">
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`flex h-[3.65rem] flex-col items-center justify-center gap-1 px-0.5 text-[10px] font-semibold tracking-wide ${
                  active ? "text-cta" : "text-stone"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    active ? "bg-cta/10" : ""
                  }`}
                >
                  <NavIcon name={tab.icon} active={active} />
                </span>
                {tab.label}
              </Link>
            </li>
          );
        })}
        <li className="min-w-0">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={onMenuOpen}
            className={`flex h-[3.65rem] w-full flex-col items-center justify-center gap-1 px-0.5 text-[10px] font-semibold tracking-wide ${
              menuOpen ? "text-cta" : "text-stone"
            }`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                menuOpen ? "bg-cta/10" : ""
              }`}
            >
              <NavIcon name="menu" active={menuOpen} />
            </span>
            Menu
          </button>
        </li>
      </ul>
    </nav>
  );
}
