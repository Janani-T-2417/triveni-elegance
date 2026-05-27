import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { EMAIL, PHONE, ADDRESS } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-secondary/70 border-t border-border mt-24">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Triveni Traders" className="h-20 w-auto -ml-2" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg tracking-wide text-foreground">TRIVENI TRADERS</span>
              <span className="text-[11px] italic text-sage-deep tracking-[0.2em]">Rice And Dals</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Wholesale rice, dals & cashews from the heart of Odisha — sourced with care, delivered with trust.
          </p>
        </div>

        <div>
          <h4 className="text-base font-display text-sage-deep mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[["/","Home"],["/about","About"],["/products","Products"],["/rice","Rice"],["/dals","Dals"],["/kaaju","Kaaju"],["/contact","Contact"]].map(([to,label]) => (
              <li key={to}><Link to={to} className="text-muted-foreground hover:text-sage-deep transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-display text-sage-deep mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-sage-deep shrink-0" /><a href={`tel:${PHONE}`} className="hover:text-foreground">{PHONE}</a></li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-sage-deep shrink-0" /><a href={`mailto:${EMAIL}`} className="hover:text-foreground break-all">{EMAIL}</a></li>
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-sage-deep shrink-0" /><span>{ADDRESS}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-display text-sage-deep mb-4">Business Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon — Sat: 9:00 AM – 8:00 PM</li>
            <li>Sunday: 10:00 AM – 4:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Triveni Traders. All rights reserved.</p>
          <p>Crafted with care in Jeypore, Odisha.</p>
        </div>
      </div>
    </footer>
  );
}
