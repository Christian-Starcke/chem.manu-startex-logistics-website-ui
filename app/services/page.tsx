"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Factory, Package, Container, Timer } from "lucide-react"

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const industries = [
    {
      icon: Factory,
      name: "Chemical Manufacturing",
      description:
        "Operational freight transportation for chemical manufacturers including raw materials, finished products, packaging supplies, and operational materials across the Gulf Coast and Southeast.",
    },
    {
      icon: Package,
      name: "Packaged Chemicals",
      description:
        "Dry van services for packaged chemicals, specialty chemicals, consumer products, and packaged feedstocks serving chemical manufacturing operations throughout our service area.",
    },
    {
      icon: Container,
      name: "Bulk Materials",
      description:
        "Flatbed transportation for bulk raw materials, packaging supplies, and large packaged goods for chemical manufacturing facilities across the Gulf Coast and Southeast regions.",
    },
    {
      icon: Timer,
      name: "Time-Critical Operations",
      description:
        "Expedited hot shot services for urgent operational supplies, emergency replacement parts, and just-in-time inventory needs for chemical manufacturing operations.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-primary text-primary-foreground lg:min-h-[55vh]">
        <div className="absolute inset-0 bg-[url('/hero-services-fleet.jpg')] bg-cover bg-center opacity-60" />
        <div className="relative mx-auto flex min-h-[50vh] items-end max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:min-h-[55vh] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Comprehensive transportation solutions for chemical manufacturing operational freight across the Gulf Coast and Southeast regions
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
              A comprehensive look at our chemical manufacturing freight capabilities
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
                {/* Dry Van */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Dry Van</h4>
                  <h5 className="mt-3 font-bold text-foreground">Packaged Chemicals & Materials</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Our core specialty: dry van transportation for packaged chemicals, materials, and supplies. Serving chemical manufacturers across the Gulf Coast and Southeast with $1.5K–$8K average ticket size.
                  </p>
                </div>

                {/* Flatbed */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Flatbed</h4>
                  <h5 className="mt-3 font-bold text-foreground">Bulk Materials & Packaging</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Transportation services for bulk raw materials, packaging supplies, and large packaged goods. We handle bulk materials, packaging, and raw material shipments with $2K–$10K ticket sizes.
                  </p>
                </div>

                {/* Expedited */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Expedited</h4>
                  <h5 className="mt-3 font-bold text-foreground">Hot Shot – Time-Critical</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Urgent transportation solutions for time-critical operational supplies and emergency replacement parts. High carrier availability in Texas and North Carolina markets with $3K–$15K ticket sizes.
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
                      Dry Van Trailers
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Flatbed Trailers
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Hot Shot Vehicles
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Refrigerated Trailers
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
                      Gulf Coast Region
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Southeast Region
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Houston, TX Office
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Raleigh, NC Office
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      TX through NC Corridor
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Specializations */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Our Service Specializations</h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Specialized transportation expertise for chemical manufacturing operations
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
              Contact us to discuss your chemical manufacturing operational freight transportation needs
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
