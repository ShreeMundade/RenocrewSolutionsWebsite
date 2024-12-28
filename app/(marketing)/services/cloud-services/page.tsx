'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Server, Shield, Zap, BarChart, Lock } from 'lucide-react'

const services = [
  {
    title: "Cloud Migration",
    description: "Seamless migration of your infrastructure to AWS, Azure, or Google Cloud Platform.",
    icon: Cloud,
  },
  {
    title: "Cloud Optimization",
    description: "Optimize your cloud resources for better performance and cost-efficiency.",
    icon: Zap,
  },
  {
    title: "Cloud Security",
    description: "Implement robust security measures to protect your cloud infrastructure.",
    icon: Shield,
  },
  {
    title: "Serverless Architecture",
    description: "Design and implement serverless solutions for scalable and efficient applications.",
    icon: Server,
  },
  {
    title: "Cloud Analytics",
    description: "Leverage cloud-based analytics tools for data-driven insights.",
    icon: BarChart,
  },
  {
    title: "Compliance & Governance",
    description: "Ensure your cloud infrastructure meets industry standards and regulations.",
    icon: Lock,
  },
]

const cloudProviders = [
  { name: "Amazon Web Services (AWS)", image: "/placeholder.svg?height=80&width=80" },
  { name: "Microsoft Azure", image: "/placeholder.svg?height=80&width=80" },
  { name: "Google Cloud Platform", image: "/placeholder.svg?height=80&width=80" },
  { name: "DigitalOcean", image: "/placeholder.svg?height=80&width=80" },
  { name: "IBM Cloud", image: "/placeholder.svg?height=80&width=80" },
]

const testimonials = [
  {
    quote: "Renocrew's cloud services have transformed our IT infrastructure. Highly recommended!",
    name: "John Smith",
    title: "CTO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Their expertise in cloud optimization has significantly reduced our costs.",
    name: "Sarah Johnson",
    title: "CEO, StartupX",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The cloud migration process was smooth and efficient. Great team to work with!",
    name: "Michael Brown",
    title: "IT Director, MegaCorp",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const topSoftware = [
  "AWS EC2", "Azure Virtual Machines", "Google Kubernetes Engine", "AWS Lambda", "Azure Functions", 
  "Google Cloud Functions", "AWS S3", "Azure Blob Storage", "Google Cloud Storage", "Terraform"
]

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-30">
          Cloud Services
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto text-center mt-4 relative z-30">
          Comprehensive cloud solutions for your business
        </p>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TextGenerateEffect words="Empower your business with cutting-edge cloud solutions" className="text-4xl font-bold text-center text-white mb-8" />
          <HoverEffect items={services.map(service => ({ ...service, link: "#" }))} />
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Providers We Work With</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <AnimatedTooltip items={cloudProviders.map((provider, index) => ({ id: index, name: provider.name, designation: "", image: provider.image }))} />
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Top Cloud Technologies We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {topSoftware.map((software, index) => (
              <BackgroundGradient key={index} className="rounded-[22px] p-4 sm:p-10 bg-neutral-900">
                <p className="text-white text-center font-semibold">{software}</p>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Ready to Leverage the Cloud?</CardTitle>
              <CardDescription className="text-neutral-300">
                Let's discuss how our cloud services can transform your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  Schedule a Cloud Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Explore Our Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

