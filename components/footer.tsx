import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Image src="/logo-star.png" alt="StarTex" width={200} height={60} className="h-10 w-auto" priority />
            <p className="mt-4 text-sm text-primary-foreground/80">
              Energy infrastructure and construction freight solutions across Texas, Louisiana, and Oklahoma. Freight brokerage, managed transportation, and 3PL services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-primary-foreground/80">Flatbed Services</li>
              <li className="text-sm text-primary-foreground/80">Heavy Haul</li>
              <li className="text-sm text-primary-foreground/80">Expedited Services</li>
              <li className="text-sm text-primary-foreground/80">Managed Transportation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <div className="text-sm text-primary-foreground/80">
                  <div>Texas (TX)</div>
                  <div className="mt-1">Louisiana (LA)</div>
                  <div className="mt-1">Oklahoma (OK)</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">info@startexlogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} StarTex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
