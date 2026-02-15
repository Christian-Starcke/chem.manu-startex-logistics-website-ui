"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Ship, Container, Waves, Factory } from "lucide-react"

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const industries = [
    {
      icon: Factory,
      name: "Energy Infrastructure",
      description:
        "Transportation services for energy pipe, steel, and construction materials supporting oil & gas, renewable energy, and energy infrastructure projects across the Gulf Coast.",
    },
    {
      icon: Ship,
      name: "Construction Projects",
      description:
        "Heavy haul and flatbed services for large-scale construction projects, including equipment, machinery, and building materials for commercial and industrial development.",
    },
    {
      icon: Container,
      name: "Oilfield Operations",
      description:
        "Expedited and time-critical transportation for oilfield equipment, drilling supplies, and energy sector freight requiring urgent delivery across Texas, Louisiana, and Oklahoma.",
    },
    {
      icon: Waves,
      name: "Industrial Manufacturing",
      description:
        "Reliable transportation for industrial manufacturing facilities moving large equipment, components, and materials throughout the Gulf Coast energy markets.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="absolute inset-0 bg-[url('/industrial-port-containers-dusk.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Comprehensive transportation solutions for energy infrastructure and construction freight across Texas, Louisiana, and Oklahoma
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Diagram */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Service Overview</h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              A comprehensive look at our energy infrastructure freight capabilities
            </p>
          </div>

          {/* Service Categories Header */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px] rounded-lg border-2 border-border shadow-sm overflow-hidden">
              {/* Top Header Bar */}
              <div className="grid grid-cols-4">
                <div className="col-span-3 bg-primary px-6 py-4 border-r-2 border-primary-foreground/20">
                  <h3 className="text-lg font-bold text-primary-foreground tracking-wide uppercase">Transportation Services</h3>
                </div>
                <div className="col-span-1 bg-accent px-6 py-4">
                  <h3 className="text-lg font-bold text-accent-foreground tracking-wide uppercase">Service Models</h3>
                </div>
              </div>

              {/* Service Columns */}
              <div className="grid grid-cols-4 bg-background">
                {/* Flatbed */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Flatbed</h4>
                  <h5 className="mt-3 font-bold text-foreground">Energy Pipe & Steel</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Our core specialty: flatbed transportation for energy pipe, steel, and construction materials. Serving energy and construction industries across Texas, Louisiana, and Oklahoma with $3K–$8K average ticket size.
                  </p>
                </div>

                {/* Heavy Haul */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Heavy Haul</h4>
                  <h5 className="mt-3 font-bold text-foreground">Construction & Energy Equipment</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Transportation services for large-scale energy and construction projects. We handle large equipment, construction machinery, and energy infrastructure components with $10K–$40K ticket sizes.
                  </p>
                </div>

                {/* Expedited */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Expedited</h4>
                  <h5 className="mt-3 font-bold text-foreground">Time-Critical Freight</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Urgent transportation solutions for oilfield equipment and time-sensitive energy sector freight. High carrier availability in Texas markets with $5K–$15K ticket sizes.
                  </p>
                </div>

                {/* Service Models */}
                <div className="p-6 bg-accent/10">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Service Models</h4>
                  <h5 className="mt-3 font-bold text-foreground">Brokerage, MTP & 3PL</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    We offer three engagement models: Freight Brokerage for transactional needs, Managed Transportation Provider for end-to-end management, and 3PL for comprehensive supply chain solutions.
                  </p>
                </div>
              </div>

              {/* Divider Line */}
              <div className="h-0.5 bg-border" />

              {/* Bottom Categories Grid */}
              <div className="grid grid-cols-3 bg-muted/30">
                {/* Equipment Types */}
                <div className="p-6 border-r-2 border-border">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm mb-4">Equipment Types</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Flatbed Trailers
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Step Decks
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Lowboys
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      RGNs (Removable Gooseneck)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Specialized Equipment
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div className="p-6 border-r-2 border-border">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm mb-4">Services</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Freight Brokerage
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Managed Transportation
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      3PL Services
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Carrier Network Management
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Strategic Logistics Planning
                    </li>
                  </ul>
                </div>

                {/* Coverage */}
                <div className="p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm mb-4">Coverage</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Texas (TX)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Louisiana (LA)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Oklahoma (OK)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Gulf Coast Region
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Energy Infrastructure Corridors
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Industries We Serve</h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Specialized transportation expertise for energy infrastructure and construction sectors
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Card key={industry.name} className="p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <industry.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-semibold">{industry.name}</h3>
                <p className="mt-2 text-pretty text-sm text-muted-foreground">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Need a Custom Solution?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/90">
              Contact us to discuss your energy infrastructure and construction freight transportation needs
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
