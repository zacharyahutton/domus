"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navItems, siteConfig } from "@/content/site";
import { TopUtilityBar } from "@/components/layout/TopUtilityBar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<"root" | string>("root");
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const isHome = pathname === "/";
  const heroMode = isHome && !scrolled;
  const showUtility = isHome;

  useEffect(() => {
    let lastY = window.scrollY;
    let rafId: number | undefined;

    const process = () => {
      rafId = undefined;
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      setScrolled(y > 24);

      // Desktop: header never hides; only TopUtilityBar scrolls away on desktop.
      if (window.innerWidth >= 1024) return;

      // Mobile only: hide on intentional downward scroll, show on upward.
      if (delta > 14 && y > 220) setHeaderHidden(true);
      else if (delta < -10 || y < 80) setHeaderHidden(false);
    };

    const onScroll = () => {
      if (rafId === undefined) rafId = requestAnimationFrame(process);
    };

    // Force visible when resizing to desktop (e.g. if hidden while mobile).
    const onResize = () => {
      if (window.innerWidth >= 1024) setHeaderHidden(false);
    };

    process();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId !== undefined) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobilePanel("root");
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobilePanel !== "root") setMobilePanel("root");
        else {
          setOpen(false);
          menuBtnRef.current?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, mobilePanel]);

  function closeMenu() {
    setOpen(false);
    setOpenDrop(null);
    setMobilePanel("root");
    queueMicrotask(() => menuBtnRef.current?.focus());
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/products") {
      return pathname.startsWith("/products") || pathname.startsWith("/services");
    }
    if (href === "/gallery") {
      return pathname.startsWith("/gallery") || pathname.startsWith("/projects");
    }
    if (href === "/insights") {
      return pathname.startsWith("/insights") || pathname.startsWith("/journal");
    }
    if (href === "/distributors") {
      return pathname.startsWith("/distributors");
    }
    if (href === "/about") return pathname.startsWith("/about");
    if (href === "/faq") return pathname.startsWith("/faq");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeChildNav = navItems.find((n) => n.href === mobilePanel);

  return (
    <>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 ${
          heroMode
            ? "border-b border-transparent bg-transparent py-0"
            : "border-b border-line/80 bg-white/95 py-0 shadow-sm backdrop-blur"
        }`}
        style={{ transform: headerHidden && !open ? "translateY(-100%)" : "translateY(0)" }}
        data-header-hidden={headerHidden && !open}
      >
        {showUtility ? <TopUtilityBar light={!heroMode} /> : null}
        <div
          className={`brand-stripe transition-opacity ${heroMode ? "opacity-70" : "opacity-100"}`}
          aria-hidden
        />
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 md:px-6 ${
            heroMode ? "pt-10 pb-3.5" : "py-2.5"
          }`}
        >
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/brand/logo.png"
              alt={`${siteConfig.shortName} logo`}
              width={heroMode ? 52 : 44}
              height={heroMode ? 52 : 44}
              className={`rounded-full object-contain transition-all duration-300 ${
                heroMode ? "h-[3.25rem] w-[3.25rem]" : "h-11 w-11"
              }`}
              priority
            />
            <span
              className={`font-display text-left leading-tight transition-all duration-300 ${
                heroMode ? "scale-100" : "scale-95"
              }`}
            >
              <span
                className={`block font-bold tracking-wide transition-colors ${
                  heroMode ? "text-lg text-white md:text-xl drop-shadow" : "text-lg text-ink md:text-xl"
                }`}
              >
                DOMUS
              </span>
              <span
                className={`block text-[11px] font-medium md:text-xs ${
                  heroMode ? "text-white/80" : "text-stone"
                }`}
              >
                Windows &amp; Doors Ltd.
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <div
                key={item.href + item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDrop(item.href)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                    heroMode ? "text-white/90 hover:text-white" : "text-ink/85 hover:text-cta"
                  } ${
                    isActive(item.href)
                      ? heroMode
                        ? "bg-white/15 text-white underline decoration-orange decoration-2 underline-offset-8"
                        : "bg-cta/10 text-cta"
                      : ""
                  }`}
                  aria-expanded={item.children ? openDrop === item.href : undefined}
                >
                  {item.label}
                  {item.children ? (
                    <span aria-hidden className="text-[10px]">
                      ▾
                    </span>
                  ) : null}
                </Link>
                {item.children && openDrop === item.href ? (
                  <div className="absolute left-0 top-full z-50 min-w-[260px] rounded-lg border border-line bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-ink hover:bg-fog"
                      >
                        <span className="font-medium">{child.label}</span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-stone">{child.description}</span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-2 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Request a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${
                heroMode ? "border-white/40 bg-white/10 text-white" : "border-line bg-white text-ink"
              }`}
              aria-label="Request a quote"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 6h16v10H8l-4 3V6z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button
              ref={menuBtnRef}
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${
                heroMode ? "border-white/40 bg-white/10 text-white" : "border-line bg-white text-ink"
              }`}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id={panelId}
            className="max-h-[80vh] overflow-y-auto border-t border-line bg-white px-4 py-4 lg:hidden"
            aria-label="Mobile"
          >
            {mobilePanel !== "root" && activeChildNav?.children ? (
              <div>
                <button
                  type="button"
                  className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-cta"
                  onClick={() => setMobilePanel("root")}
                >
                  <span aria-hidden>←</span> Back
                </button>
                <p className="font-display text-lg font-semibold text-ink">{activeChildNav.label}</p>
                <ul className="mt-3 space-y-1">
                  {activeChildNav.children.map((child) => (
                    <li key={child.href + child.label}>
                      <Link
                        href={child.href}
                        className="block rounded-md px-2 py-2.5 text-sm text-ink hover:bg-fog"
                        onClick={closeMenu}
                      >
                        {child.label}
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-stone">{child.description}</span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href + item.label}>
                    {item.children ? (
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-2.5 text-left text-base font-semibold"
                        onClick={() => setMobilePanel(item.href)}
                      >
                        {item.label}
                        <span aria-hidden className="text-stone">
                          →
                        </span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2.5 text-base font-semibold"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-md bg-cta px-4 py-2.5 text-sm font-semibold text-white"
                    onClick={closeMenu}
                  >
                    Request a Quote
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        ) : null}
      </header>

      <MobileBottomNav
        menuOpen={open}
        onMenuOpen={() => {
          setOpen((v) => !v);
          setMobilePanel("root");
        }}
      />
    </>
  );
}
