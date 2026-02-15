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
      title: "Drayage Coordination",
      description:
        "Expert coordination of containerized chemical and industrial cargo movements across the Southeast and Gulf Coast.",
    },
    {
      icon: Ship,
      title: "Short-Haul Brokerage",
      description: "Efficient brokerage services for short-distance transportation of specialized cargo.",
    },
    {
      icon: Waves,
      title: "Carrier Network",
      description: "Access to our extensive network of qualified carriers for chemical and industrial transportation.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Non-Asset Broker",
      description: "We focus on coordination and carrier management—no fleet overhead means flexibility and competitive rates.",
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock dispatch and support ensures your cargo keeps moving, day or night.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Specialized experience in chemical and industrial logistics with deep knowledge of compliance requirements.",
    },
    {
      icon: Users,
      title: "Dedicated Partnership",
      description: "Long-term relationships built on trust, transparency, and consistent performance.",
    },
    {
      icon: Globe,
      title: "Regional Coverage",
      description: "Extensive carrier network spanning the Gulf Coast and Southeast from Houston to Raleigh.",
    },
    {
      icon: CheckCircle,
      title: "Reliable Execution",
      description: "Meticulous attention to appointments, documentation, and exception resolution on every shipment.",
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
              Expert Drayage &amp; Short-Haul Services
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              StarTex provides drayage and short-haul brokerage services for containerized chemical and industrial cargo across the Southeast and Gulf Coast. 
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Trusted Partner in Chemical & Industrial Logistics</h2>
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  StarTex is a non-asset drayage and short-haul broker specializing in containerized chemical and industrial cargo. With offices in Houston, TX and Raleigh, NC, we provide comprehensive logistics coordination across the Southeast and Gulf Coast regions.
                </p>
                <p>
                  Our expertise lies in managing the complete drayage lifecycle—from carrier assignment and appointment scheduling to execution and exception resolution. We act as the critical connection between shippers and reliable transportation capacity.
                </p>
                <p>
                  We believe exceptional brokerage is built on expertise, integrity, and consistent execution. That's why shippers and carriers alike trust StarTex to keep their cargo moving.
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
              Specialized brokerage solutions for chemical and industrial logistics
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
                We're more than a freight broker—we're your logistics partner. Here's what sets us apart in chemical and industrial transportation.
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
              Ready to Optimize Your Logistics?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/90">
              Contact us today to discuss your transportation needs
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
