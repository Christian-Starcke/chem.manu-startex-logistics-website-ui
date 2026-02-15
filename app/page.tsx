import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Ship, Truck, Waves, Shield, Clock, Award, Users, Globe, CheckCircle } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Truck,
      title: "Flatbed Energy Infrastructure",
      description:
        "Specialized flatbed transportation for energy pipe, steel, and construction materials across Texas, Louisiana, and Oklahoma.",
    },
    {
      icon: Ship,
      title: "Heavy Haul Equipment",
      description: "Transportation services for large-scale energy and construction equipment, machinery, and infrastructure components.",
    },
    {
      icon: Waves,
      title: "Expedited & Time-Critical",
      description: "Urgent transportation solutions for oilfield equipment and time-sensitive energy sector freight.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Specialized Niche Expertise",
      description: "Deep focus on energy infrastructure and construction freight across flatbed, heavy haul, and expedited services.",
    },
    {
      icon: Globe,
      title: "Strategic Geographic Positioning",
      description: "Gulf Coast energy market concentration with strong carrier networks in Texas, Louisiana, and Oklahoma.",
    },
    {
      icon: Award,
      title: "Low Regulatory Friction",
      description: "Non-hazmat focus reduces complexity, risk, and operational overhead for faster, smoother operations.",
    },
    {
      icon: Users,
      title: "Carrier Network Depth",
      description: "Strong relationships and high carrier availability in target markets ensure reliable capacity.",
    },
    {
      icon: CheckCircle,
      title: "Flexible Service Model",
      description: "Multiple engagement options: Freight Brokerage, Managed Transportation Provider, and 3PL services.",
    },
    {
      icon: Clock,
      title: "Multi-Service Capability",
      description: "Single provider for flatbed, heavy haul, and expedited transportation needs across the energy sector.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/industrial-port-containers-dusk.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Energy Infrastructure Freight Solutions
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              StarTex Logistics specializes in energy infrastructure and construction freight transportation across the Gulf Coast. Freight brokerage, managed transportation, and 3PL services in Texas, Louisiana, and Oklahoma.
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Trusted Partner in Energy Infrastructure Freight</h2>
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  StarTex Logistics is a comprehensive logistics solutions provider specializing in energy infrastructure and construction freight across the Gulf Coast region. We deliver solutions through three core service models: Freight Brokerage, Managed Transportation Provider, and 3PL services.
                </p>
                <p>
                  Our primary focus is flatbed energy infrastructure freight—transporting energy pipe, steel, and construction materials across Texas, Louisiana, and Oklahoma. We also provide heavy haul construction and energy equipment transportation, plus expedited time-critical services for the oilfield and energy sectors.
                </p>
                <p>
                  We believe exceptional logistics is built on specialized expertise, strategic positioning, and consistent execution. That's why shippers and carriers alike trust StarTex to keep their energy infrastructure freight moving efficiently.
                </p>
              </div>
            </div>

            <div className="aspect-square overflow-hidden rounded-lg lg:aspect-auto lg:h-full lg:min-h-[400px]">
              <Image
                src="/logistics-coordination.jpg"
                alt="StarTex logistics coordination"
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
              Specialized transportation solutions for energy infrastructure and construction freight
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="p-8 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
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
                We're more than a freight broker—we're your logistics partner. Here's what sets us apart in energy infrastructure and construction freight transportation.
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
              Ready to Move Your Energy Infrastructure Freight?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/90">
              Contact us today to discuss your flatbed, heavy haul, or expedited transportation needs across Texas, Louisiana, and Oklahoma
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
