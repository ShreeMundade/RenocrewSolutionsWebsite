'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { WavyBackground } from "@/components/ui/wavy-background"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Cpu, BarChart, Users, Key, Zap } from 'lucide-react'

const services = [
  {
    title: "Property Management Systems",
    description: "Implement and optimize property management software for efficient operations.",
    icon: Building,
  },
  {
    title: "Smart Building Solutions",
    description: "Integrate IoT devices and automation for enhanced building performance.",
    icon: Cpu,
  },
  {
    title: "Real Estate Analytics",
    description: "Leverage data analytics for informed decision-making in real estate.",
    icon: BarChart,
  },
  {
    title: "Tenant Experience Platforms",
    description: "Develop digital solutions to improve tenant satisfaction and engagement.",
    icon: Users,
  },
  {
    title: "Access Control Systems",
    description: "Implement secure and smart access control solutions for properties.",
    icon: Key,
  },
  {
    title: "Energy Management",
    description: "Optimize energy consumption with smart monitoring and control systems.",
    icon: Zap,
  },
]


const team = [
    {
        name: "Shree M.",
        role: "CEO & Founder (Yardi Specialist)",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Shreeya M.",
        role: "CFO (Finance)",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Rohan B.",
        role: "CTO",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Atharv P.",
        role: "Yardi Consultant",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Pratik I.",
        role: "Investment Management Consultant",
        image: "/placeholder.svg?height=100&width=100",
      },
      
    ]


const topSoftware = [
  "Yardi", "MRI Software", "AppFolio", "RealPage", "Buildium"
]

export default function ProptechSolutionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h1 className="text-4xl md:text-7xl font-bold text-center text-white">
          Proptech Solutions
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto text-center mt-4">
          Innovative technology solutions for real estate and property management
        </p>
      </WavyBackground>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Proptech Services</h2>
          <HoverEffect items={services.map(service => ({ ...service, link: "#" }))} />
          </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Proptech Experts</h2>
          <div className="flex flex-wrap justify-center gap-8">
          <AnimatedTooltip items={team.map((member, index) => ({ ...member, id: index }))} />
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Top Proptech Solutions We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {topSoftware.map((software, index) => (
              <BackgroundGradient key={index} className="rounded-[22px] p-4 sm:p-10 bg-neutral-900">
                <p className="text-white text-center font-semibold">{software}</p>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Ready to Innovate Your Real Estate Tech?</CardTitle>
              <CardDescription className="text-neutral-300">
                Let's discuss how our proptech solutions can revolutionize your property management and real estate operations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  Schedule a Demo
                </Button>
                <Button size="lg" variant="outline">
                  Explore Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

