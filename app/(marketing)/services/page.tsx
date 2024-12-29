'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. We specialize in web applications, mobile apps, and enterprise software.",
    link: "/services/software-development",
  },
  {
    title: "Cloud Services",
    description:
      "Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform. Migration, optimization, and management.",
    link: "/services/cloud-services",
  },
  {
        title: "Accounting & Bookkeeping",
        description:
          "Comprehensive accounting and bookkeeping services tailored to streamline your financial management and ensure accuracy.",
        link: "/services/accounting-bookkeeping",
  },
      
  {
    title: "Proptech Solutions",
    description:
      "Specialized technology solutions for real estate and property management, including Yardi consulting.",
    link: "/services/proptech-consulting",
  },
  {
    title: "Virtual CFO Services",
    description:
      "Expert financial guidance and strategic planning to help your business grow and succeed.",
    link: "/services/virtual-cfo",
  },
  {
    title: "Virtual CTO Services",
    description:
      "Technology leadership and innovation strategy to drive your business forward.",
    link: "/services/virtual-cto",
  },
]

const testimonials = [
  {
    quote: "Renocrew Solutions transformed our business with their innovative software solutions.",
    name: "  Marteen Fuger",
    title: "  Cofounder, Runnr.ai",
    image: "./clients/maarten.jpeg",
  },
  {
    quote: "Their cloud expertise helped us scale efficiently and securely.",
    name: "  Steven Olimans",
    title: "  CTO, Runnr.ai",
    image: "./clients/steven.jpeg",
  },
  {
    quote: "The virtual CFO service provided invaluable financial guidance.",
    name: "  Paul Wright",
    title: "  CEO, SignValue Inc.",
    image: "./clients/paul.jpeg",
  },
]

const features = [
  {
    title: "Custom Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "Tailored solutions built specifically for your business needs",
  },
  {
    title: "Cloud Solutions",
    image: "/placeholder.svg?height=400&width=600",
    description: "Scalable and secure cloud infrastructure services",
  },
  {
    title: "24/7 Support",
    image: "/placeholder.svg?height=400&width=600",
    description: "Round-the-clock technical support and maintenance",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Our Services
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto text-center mt-4 relative z-30">
          Comprehensive technology solutions to empower your business in the digital age
        </p>
      </div>

      <div className="px-4 md:px-6 py-12">
        <TracingBeam className="px-6">
          <div className="max-w-7xl mx-auto">
            <HoverEffect items={services} />
          </div>
        </TracingBeam>
      </div>

      {/* <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Solutions</h2>
          </div>
          <MacbookScroll
            showGradient={true}
            title="Cutting-edge Technology Solutions"
            gradient={[
              "from-[#f5f5f5]",
              "via-[#c4c4c4]",
              "to-[#ffffff]",
            ]}
          >
            <div className="h-[40rem] w-full flex items-center justify-center text-white">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              >
                <source src="/placeholder-video.mp4" type="video/mp4" />
              </video>
            </div>
          </MacbookScroll>
        </div>
      </div> */}

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <BackgroundGradient key={idx} className="rounded-[22px] p-4 sm:p-10 bg-neutral-900">
                <blockquote className="text-white">
                  <p className="text-lg mb-4">{testimonial.quote}</p>
                  <footer className="flex items-center gap-4">
                    <AnimatedTooltip
                      items={[
                        {
                          id: idx,
                          name: testimonial.name,
                          designation: testimonial.title,
                          image: testimonial.image,
                        },
                      ]}
                    />
                    <div>
                      <cite className="font-medium">{testimonial.name}</cite>
                      <p className="text-sm text-neutral-400">{testimonial.title}</p>
                    </div>
                  </footer>
                </blockquote>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-neutral-300">
              Let's discuss how we can help transform your business
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
