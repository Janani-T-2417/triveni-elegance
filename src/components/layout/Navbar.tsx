import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/rice", label: "Rice" },
  { to: "/dals", label: "Dals" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Triveni Traders" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${active ? "text-sage-deep" : "text-foreground/80 hover:text-sage-deep"}`}
              >
                {l.label}
                {active && <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-6 bg-gradient-gold rounded-full" />}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://wa.me/919438426292"
          target="_blank" rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-sage text-primary-foreground text-sm font-medium shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5"
        >
          WhatsApp Us
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="px-3 py-3 rounded-lg text-foreground/90 hover:bg-secondary transition-colors">
                {l.label}
              </Link>
            ))}
            <a href="https://wa.me/919438426292" target="_blank" rel="noreferrer" className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-gradient-sage text-primary-foreground font-medium">
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
