import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Truck, Container, Timer, Shield, Clock, Award, Users, Globe, CheckCircle } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Truck,
      title: "Dry Van – Packaged Chemicals",
      description:
        "Specialized dry van transportation for packaged chemicals, materials, and supplies serving chemical manufacturers across the Gulf Coast and Southeast.",
    },
    {
      icon: Container,
      title: "Flatbed – Bulk Materials",
      description: "Transportation services for bulk raw materials, packaging supplies, and large packaged goods for chemical manufacturing operations.",
    },
    {
      icon: Timer,
      title: "Expedited Hot Shot",
      description: "Urgent transportation solutions for time-critical operational supplies, emergency replacement parts, and just-in-time inventory needs.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Specialized Niche Expertise",
      description: "Deep focus on chemical manufacturing operational freight across dry van, flatbed, and expedited hot shot services.",
    },
    {
      icon: Globe,
      title: "Strategic Geographic Positioning",
      description: "Dual-office coverage (Houston, TX + Raleigh, NC) serving Gulf Coast and Southeast chemical manufacturing corridors.",
    },
    {
      icon: Award,
      title: "Low Regulatory Friction",
      description: "Non-hazmat focus reduces complexity, risk, and operational overhead for faster, smoother operations.",
    },
    {
      icon: Users,
      title: "Carrier Network Depth",
      description: "Strong relationships and high carrier availability in Gulf Coast and Southeast markets ensure reliable capacity.",
    },
    {
      icon: CheckCircle,
      title: "Flexible Service Model",
      description: "Multiple engagement options: Freight Brokerage, Managed Transportation Provider, and 3PL services.",
    },
    {
      icon: Clock,
      title: "Operational Focus",
      description: "Serving day-to-day operational freight needs (raw materials, finished products, packaging, supplies) for chemical manufacturers.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] bg-primary text-primary-foreground lg:min-h-[85vh]">
        <div className="absolute inset-0 bg-[url('/hero-home-chemical-freight.jpg')] bg-cover bg-[center_65%] opacity-60" />
        <div className="relative mx-auto flex min-h-[75vh] items-end max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:min-h-[85vh] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Chemical Manufacturing Freight Solutions
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              StarTex Logistics specializes in operational freight transportation for chemical manufacturers across the Gulf Coast and Southeast. Freight brokerage, managed transportation, and 3PL services from Houston, TX and Raleigh, NC.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Trusted Partner in Chemical Manufacturing Freight</h2>
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  StarTex Logistics is a specialized freight brokerage focused on serving chemical manufacturers across the Gulf Coast and Southeast regions. We operate from strategic locations in Houston, TX and Raleigh, NC, providing comprehensive transportation services for chemical manufacturing operations.
                </p>
                <p>
                  Our primary focus is dry van packaged chemicals and materials—transporting raw materials, finished products, packaging, and operational supplies for chemical manufacturers. We also provide flatbed bulk materials transportation, plus expedited hot shot services for time-critical operational supplies.
                </p>
                <p>
                  We believe exceptional logistics is built on specialized expertise, strategic positioning, and consistent execution. That's why chemical manufacturers trust StarTex to keep their operational freight moving efficiently across the Gulf Coast and Southeast.
                </p>
              </div>
            </div>

            <div className="aspect-square overflow-hidden rounded-lg lg:aspect-auto lg:h-full lg:min-h-[400px]">
              <Image
                src="/about-chemical-freight.jpg"
                alt="Dry van truck being loaded with palletized chemical containers at a chemical manufacturing plant"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Our Core Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Specialized transportation solutions for chemical manufacturing operational freight
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="p-8 transition-shadow hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent mb-6">
                  <service.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services" scroll={true}>View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose StarTex Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose StarTex?
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground">
                We're more than a freight broker—we're your logistics partner. Here's what sets us apart in chemical manufacturing operational freight transportation.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid gap-6 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                      <item.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 text-primary-foreground sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Move Your Chemical Manufacturing Freight?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/90">
              Contact us today to discuss your dry van, flatbed, or expedited hot shot transportation needs across the Gulf Coast and Southeast, from Texas through North Carolina
            </p>
            <div className="mt-6">
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
