"use client"

import React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Truck, Package, CheckCircle, MessageSquare } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function ContactPage() {
  const [userType, setUserType] = useState<"shipper" | "carrier" | "general" | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (userType && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [userType])

  const [shipperForm, setShipperForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    cargoType: "",
    volume: "",
    message: "",
  })

  const [carrierForm, setCarrierForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    mcNumber: "",
    dotNumber: "",
    equipmentType: "",
    serviceArea: "",
    message: "",
  })

  const [generalForm, setGeneralForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleShipperSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for contacting StarTex! Our team will reach out within 24 hours to discuss your shipping needs.")
  }

  const handleCarrierSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your interest in joining the StarTex carrier network! Our carrier relations team will be in touch shortly.")
  }

  const handleShipperChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setShipperForm({
      ...shipperForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleCarrierChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCarrierForm({
      ...carrierForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for contacting StarTex! We'll get back to you within 24 hours.")
  }

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setGeneralForm({
      ...generalForm,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtext: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@startex.com",
      subtext: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Gulf Coast & Southeast",
      subtext: "Houston, TX & Raleigh, NC Offices",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 Operations",
      subtext: "Round-the-clock service",
    },
  ]

  const shipperBenefits = [
    "Access to vetted carrier network",
    "Competitive rates",
    "Real-time shipment tracking",
    "24/7 dispatch support",
    "Dedicated account management",
  ]

  const carrierBenefits = [
    "Consistent freight opportunities",
    "Quick pay options available",
    "No forced dispatch",
    "Fuel discount programs",
    "Dedicated carrier support",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="absolute inset-0 bg-[url('/hero-contact-partnership.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">Let's Work Together</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Whether you're a chemical manufacturer looking for operational freight solutions or a carrier seeking quality freight opportunities, StarTex is your partner in chemical manufacturing logistics across the Gulf Coast and Southeast regions.
            </p>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tell Us About Yourself</h2>
            <p className="mt-4 text-muted-foreground">Select your role to get started</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {/* Shipper Card */}
            <Card
              className={`p-8 cursor-pointer transition-all hover:shadow-lg ${
                userType === "shipper" ? "ring-2 ring-accent border-accent" : ""
              }`}
              onClick={() => setUserType("shipper")}
            >
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Package className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-bold">I'm a Shipper</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I need reliable dry van, flatbed, or expedited hot shot services for my chemical manufacturing operational freight
                </p>
                {userType === "shipper" && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-accent">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Selected</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Carrier Card */}
            <Card
              className={`p-8 cursor-pointer transition-all hover:shadow-lg ${
                userType === "carrier" ? "ring-2 ring-accent border-accent" : ""
              }`}
              onClick={() => setUserType("carrier")}
            >
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Truck className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-bold">I'm a Carrier</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I want to join the StarTex carrier network and access chemical manufacturing freight opportunities
                </p>
                {userType === "carrier" && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-accent">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Selected</span>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* General Inquiry Option */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div
              onClick={() => setUserType("general")}
              className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition-all hover:border-accent hover:bg-accent/5 ${
                userType === "general"
                  ? "border-accent bg-accent/5"
                  : "border-border"
              }`}
            >
              <div className="inline-flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  userType === "general" ? "bg-accent" : "bg-muted"
                }`}>
                  <MessageSquare className={`h-5 w-5 ${
                    userType === "general" ? "text-accent-foreground" : "text-muted-foreground"
                  }`} />
                </div>
                <div className="text-left">
                  <p className={`font-medium ${userType === "general" ? "text-accent" : "text-foreground"}`}>
                    General Inquiry
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Have a general inquiry? Contact us here
                  </p>
                </div>
                {userType === "general" && (
                  <CheckCircle className="h-5 w-5 text-accent ml-2" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div ref={formRef}>
        {/* Shipper Form */}
        {userType === "shipper" && (
          <section className="pb-16 sm:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Ship With StarTex</h2>
                  <p className="mt-4 text-pretty text-muted-foreground">
                    Tell us about your chemical manufacturing operational freight needs and our team will reach out to discuss how we can help.
                  </p>

                  <form onSubmit={handleShipperSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="shipper-name">Full Name *</Label>
                        <Input
                          id="shipper-name"
                          name="name"
                          type="text"
                          required
                          value={shipperForm.name}
                          onChange={handleShipperChange}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shipper-email">Email *</Label>
                        <Input
                          id="shipper-email"
                          name="email"
                          type="email"
                          required
                          value={shipperForm.email}
                          onChange={handleShipperChange}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="shipper-phone">Phone Number *</Label>
                        <Input
                          id="shipper-phone"
                          name="phone"
                          type="tel"
                          required
                          value={shipperForm.phone}
                          onChange={handleShipperChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shipper-company">Company *</Label>
                        <Input
                          id="shipper-company"
                          name="company"
                          type="text"
                          required
                          value={shipperForm.company}
                          onChange={handleShipperChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="shipper-cargo">Cargo Type</Label>
                        <select
                          id="shipper-cargo"
                          name="cargoType"
                          value={shipperForm.cargoType}
                          onChange={handleShipperChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select cargo type</option>
                          <option value="dry-van">Dry Van - Packaged Chemicals & Materials</option>
                          <option value="flatbed">Flatbed - Bulk Materials & Packaging</option>
                          <option value="expedited">Expedited Hot Shot - Time-Critical</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shipper-volume">Monthly Volume</Label>
                        <select
                          id="shipper-volume"
                          name="volume"
                          value={shipperForm.volume}
                          onChange={handleShipperChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select volume</option>
                          <option value="1-10">1-10 loads/month</option>
                          <option value="11-50">11-50 loads/month</option>
                          <option value="51-100">51-100 loads/month</option>
                          <option value="100+">100+ loads/month</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="shipper-message">Tell Us About Your Needs</Label>
                      <Textarea
                        id="shipper-message"
                        name="message"
                        value={shipperForm.message}
                        onChange={handleShipperChange}
                        placeholder="Describe your typical freight, lanes (Gulf Coast/Southeast), and any specific requirements..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Submit Request
                    </Button>
                  </form>
                </div>

                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Why Ship With StarTex?</h2>
                  <ul className="mt-8 space-y-4">
                    {shipperBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                          <CheckCircle className="h-4 w-4 text-accent-foreground" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Card className="mt-8 bg-muted p-6">
                    <h3 className="font-semibold">What Happens Next?</h3>
                    <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">1.</span>
                        Our team reviews your information
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">2.</span>
                        We reach out within 24 hours
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">3.</span>
                        Discuss your needs and provide a customized solution
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">4.</span>
                        Start shipping with StarTex
                      </li>
                    </ol>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Carrier Form */}
        {userType === "carrier" && (
          <section className="pb-16 sm:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Join Our Carrier Network</h2>
                  <p className="mt-4 text-pretty text-muted-foreground">
                    Partner with StarTex to access consistent freight opportunities in the chemical manufacturing freight market across the Gulf Coast and Southeast regions.
                  </p>

                  <form onSubmit={handleCarrierSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="carrier-name">Contact Name *</Label>
                        <Input
                          id="carrier-name"
                          name="name"
                          type="text"
                          required
                          value={carrierForm.name}
                          onChange={handleCarrierChange}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carrier-email">Email *</Label>
                        <Input
                          id="carrier-email"
                          name="email"
                          type="email"
                          required
                          value={carrierForm.email}
                          onChange={handleCarrierChange}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="carrier-phone">Phone Number *</Label>
                        <Input
                          id="carrier-phone"
                          name="phone"
                          type="tel"
                          required
                          value={carrierForm.phone}
                          onChange={handleCarrierChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carrier-company">Company Name *</Label>
                        <Input
                          id="carrier-company"
                          name="company"
                          type="text"
                          required
                          value={carrierForm.company}
                          onChange={handleCarrierChange}
                          placeholder="Your Trucking Company"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="carrier-mc">MC Number *</Label>
                        <Input
                          id="carrier-mc"
                          name="mcNumber"
                          type="text"
                          required
                          value={carrierForm.mcNumber}
                          onChange={handleCarrierChange}
                          placeholder="MC-123456"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carrier-dot">DOT Number *</Label>
                        <Input
                          id="carrier-dot"
                          name="dotNumber"
                          type="text"
                          required
                          value={carrierForm.dotNumber}
                          onChange={handleCarrierChange}
                          placeholder="1234567"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="carrier-equipment">Equipment Type</Label>
                        <select
                          id="carrier-equipment"
                          name="equipmentType"
                          value={carrierForm.equipmentType}
                          onChange={handleCarrierChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select equipment</option>
                          <option value="dry-van">Dry Van</option>
                          <option value="flatbed">Flatbed</option>
                          <option value="hot-shot">Hot Shot</option>
                          <option value="refrigerated">Refrigerated</option>
                          <option value="multiple">Multiple Types</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carrier-area">Service Area</Label>
                        <select
                          id="carrier-area"
                          name="serviceArea"
                          value={carrierForm.serviceArea}
                          onChange={handleCarrierChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select area</option>
                          <option value="gulf-coast">Gulf Coast Region (TX, LA, MS, AL, FL)</option>
                          <option value="southeast">Southeast Region (GA, SC, NC)</option>
                          <option value="houston">Houston, TX Area</option>
                          <option value="raleigh">Raleigh, NC Area</option>
                          <option value="multiple">Multiple States/Regions</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="carrier-message">Additional Information</Label>
                      <Textarea
                        id="carrier-message"
                        name="message"
                        value={carrierForm.message}
                        onChange={handleCarrierChange}
                        placeholder="Tell us about your fleet size, experience, and any specializations..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Apply to Join Network
                    </Button>
                  </form>
                </div>

                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Why Haul With StarTex?</h2>
                  <ul className="mt-8 space-y-4">
                    {carrierBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                          <CheckCircle className="h-4 w-4 text-accent-foreground" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Card className="mt-8 bg-muted p-6">
                    <h3 className="font-semibold">Carrier Requirements</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li>Active MC and DOT authority</li>
                      <li>Minimum $1M cargo insurance</li>
                      <li>Clean safety record</li>
                      <li>Experience with dry van, flatbed, or expedited hot shot freight</li>
                    </ul>
                  </Card>

                  <Card className="mt-4 bg-muted p-6">
                    <h3 className="font-semibold">What Happens Next?</h3>
                    <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">1.</span>
                        We verify your MC/DOT and insurance
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">2.</span>
                        Our carrier team reaches out
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">3.</span>
                        Complete onboarding paperwork
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">4.</span>
                        Start hauling with StarTex
                      </li>
                    </ol>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* General Form */}
        {userType === "general" && (
          <section className="pb-16 sm:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">General Inquiry</h2>
                  <p className="mt-4 text-pretty text-muted-foreground">
                    Have a question or need assistance? Fill out the form below and we'll get back to you soon.
                  </p>

                  <form onSubmit={handleGeneralSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="general-name">Full Name *</Label>
                        <Input
                          id="general-name"
                          name="name"
                          type="text"
                          required
                          value={generalForm.name}
                          onChange={handleGeneralChange}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="general-email">Email *</Label>
                        <Input
                          id="general-email"
                          name="email"
                          type="email"
                          required
                          value={generalForm.email}
                          onChange={handleGeneralChange}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="general-phone">Phone Number *</Label>
                        <Input
                          id="general-phone"
                          name="phone"
                          type="tel"
                          required
                          value={generalForm.phone}
                          onChange={handleGeneralChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="general-subject">Subject</Label>
                        <Input
                          id="general-subject"
                          name="subject"
                          type="text"
                          value={generalForm.subject}
                          onChange={handleGeneralChange}
                          placeholder="Subject of your inquiry"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="general-message">Your Message</Label>
                      <Textarea
                        id="general-message"
                        name="message"
                        value={generalForm.message}
                        onChange={handleGeneralChange}
                        placeholder="Type your message here..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Submit Inquiry
                    </Button>
                  </form>
                </div>

                <div>
                  <h2 className="text-3xl font-bold tracking-tight">How Can We Help?</h2>
                  <ul className="mt-8 space-y-4">
                    <li>Chemical manufacturing operational freight solutions</li>
                    <li>Dry van, flatbed, and expedited hot shot services</li>
                    <li>Carrier network access in Gulf Coast & Southeast</li>
                    <li>Freight brokerage, managed transportation, and 3PL services</li>
                  </ul>

                  <Card className="mt-8 bg-muted p-6">
                    <h3 className="font-semibold">What Happens Next?</h3>
                    <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">1.</span>
                        Our team reviews your inquiry
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">2.</span>
                        We reach out within 24 hours
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-foreground">3.</span>
                        Discuss your needs and provide a solution
                      </li>
                    </ol>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Info Cards */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
              <p className="mt-4 text-muted-foreground">Reach out to us directly for chemical manufacturing freight solutions</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    {React.createElement(info.icon, { className: "h-6 w-6 text-accent-foreground" })}
                  </div>
                  <h3 className="mt-4 font-semibold">{info.title}</h3>
                  <p className="mt-2 font-medium text-foreground">{info.details}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{info.subtext}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/90">
                Select your role above and fill out the form to connect with our team
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
