"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Ship, Container, Waves, Factory } from "lucide-react"

const additionalServices = [
  {
    icon: Ship,
    title: "Customized Logistics Solutions",
    description: "Tailored services to meet your unique shipping needs.",
  },
  {
    icon: Container,
    title: "Supply Chain Management",
    description: "End-to-end management of your supply chain for efficiency and reliability.",
  },
  {
    icon: Waves,
    title: "Intermodal Services",
    description: "Efficient movement of goods via sea, rail, and road for cost savings and flexibility.",
  },
  {
    icon: Factory,
    title: "Warehouse Management",
    description: "Expert handling of warehousing operations to ensure timely delivery and inventory accuracy.",
  },
]

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const industries = [
    {
      icon: Factory,
      name: "Chemical Manufacturing",
      description:
        "Reliable drayage for chemical producers moving containerized products from Gulf Coast and Southeast ports to production facilities, storage sites, and customers.",
    },
    {
      icon: Ship,
      name: "Industrial Facilities",
      description:
        "Coordinated short-haul transportation for heavy industrial operations requiring specialized handling and precise delivery scheduling.",
    },
    {
      icon: Container,
      name: "Distribution Centers",
      description:
        "Seamless container movement between ports, rail ramps, and distribution hubs with real-time tracking and proactive exception management.",
    },
    {
      icon: Waves,
      name: "Port Operations",
      description:
        "Expert coordination with Gulf Coast and Southeast port terminals for efficient container pickup, delivery, and chassis management.",
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
              Comprehensive brokerage solutions designed for chemical and industrial logistics across the Southeast and Gulf Coast
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
              A comprehensive look at our brokerage capabilities
            </p>
          </div>

          {/* Service Categories Header */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px] rounded-lg border-2 border-border shadow-sm overflow-hidden">
              {/* Top Header Bar */}
              <div className="grid grid-cols-4">
                <div className="col-span-3 bg-primary px-6 py-4 border-r-2 border-primary-foreground/20">
                  <h3 className="text-lg font-bold text-primary-foreground tracking-wide uppercase">Brokerage Services</h3>
                </div>
                <div className="col-span-1 bg-accent px-6 py-4">
                  <h3 className="text-lg font-bold text-accent-foreground tracking-wide uppercase">Coordination</h3>
                </div>
              </div>

              {/* Service Columns */}
              <div className="grid grid-cols-4 bg-background">
                {/* Drayage */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Drayage</h4>
                  <h5 className="mt-3 font-bold text-foreground">Port-to-Inland Movement</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Expert coordination of containerized chemical and industrial cargo from ports to inland destinations. We manage carrier sourcing, appointments, and execution across the Southeast and Gulf Coast.
                  </p>
                </div>

                {/* Short-Haul */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Short-Haul</h4>
                  <h5 className="mt-3 font-bold text-foreground">Regional Transportation</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Efficient brokerage for short-distance transportation of specialized cargo. We connect shippers with qualified carriers for time-sensitive chemical and industrial movements within regional networks.
                  </p>
                </div>

                {/* Specialized */}
                <div className="border-r-2 border-border p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Specialized</h4>
                  <h5 className="mt-3 font-bold text-foreground">Chemical & Industrial Focus</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Dedicated expertise in chemical and industrial cargo handling. Our non-asset model provides flexibility and specialized knowledge for your unique shipping requirements without taking title to freight.
                  </p>
                </div>

                {/* Logistics Coordination */}
                <div className="p-6 bg-accent/10">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm">Full Coordination</h4>
                  <h5 className="mt-3 font-bold text-foreground">End-to-End Management</h5>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Complete logistics coordination from origin to destination. We handle carrier assignment, appointment scheduling, documentation, exception resolution, and performance reporting.
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
                      Dry Containers
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Tank Containers
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Flatbed
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Chassis
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Intermodal
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div className="p-6 border-r-2 border-border">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm mb-4">Services</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Carrier Sourcing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Appointment Scheduling
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Exception Resolution
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Real-Time Tracking
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      24/7 Dispatch
                    </li>
                  </ul>
                </div>

                {/* Coverage */}
                <div className="p-6">
                  <h4 className="text-accent font-bold uppercase tracking-wide text-sm mb-4">Coverage</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Gulf Coast Ports
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Southeast Region
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Rail Ramps
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Distribution Centers
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      Industrial Facilities
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
              Specialized logistics expertise for chemical and industrial sectors
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
              Contact us to discuss your specific logistics requirements
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
