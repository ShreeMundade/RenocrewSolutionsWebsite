'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Shield, Zap, Database, Cpu } from 'lucide-react'

const services = [
  {
    title: "Technology Strategy",
    description: "Develop and implement effective tech strategies aligned with business goals.",
    icon: Zap,
  },
  {
    title: "Infrastructure Planning",
    description: "Design scalable and efficient IT infrastructure for your organization.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity Management",
    description: "Implement robust security measures to protect your digital assets.",
    icon: Shield,
  },
  {
    title: "Software Architecture",
    description: "Design and oversee the development of robust software systems.",
    icon: Code,
  },
  {
    title: "Data Management",
    description: "Implement effective data strategies and analytics solutions.",
    icon: Database,
  },
  {
    title: "Emerging Tech Integration",
    description: "Evaluate and integrate cutting-edge technologies like AI and IoT.",
    icon: Cpu,
  },
]

const content = [
  {
    title: "Strategic Technology Planning",
    description: "We help you develop long-term technology strategies aligned with your business objectives.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-indigo-300 to-purple-300 flex items-center justify-center text-white">
        <Zap size={100} />
      </div>
    ),
  },
  {
    title: "Digital Transformation",
    description: "Guide your organization through comprehensive digital transformation initiatives.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-300 to-cyan-300 flex items-center justify-center text-white">
        <Cloud size={100} />
      </div>
    ),
  },
  {
    title: "Technology Risk Management",
    description: "Identify and mitigate technology-related risks to protect your business.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-red-300 to-pink-300 flex items-center justify-center text-white">
        <Shield size={100} />
      </div>
    ),
  },
  {
    title: "Innovation Leadership",
    description: "Drive innovation by leveraging emerging technologies and industry best practices.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-300 to-teal-300 flex items-center justify-center text-white">
        <Cpu size={100} />
      </div>
    ),
  },
]

const team = [
  {
    name: "David Chen",
    designation: "Lead Technology Strategist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Johnson",
    designation: "Cybersecurity Expert",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Rodriguez",
    designation: "Cloud Architecture Specialist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Patel",
    designation: "Data Science Lead",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const topSoftware = [
  "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", 
  "Terraform", "Jenkins", "GitLab", "Jira", "Splunk"
]

export default function VirtualCTOPage() {
  return (
    <div className="min-h-screen bg-black">
    <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-30">
        Virtual CTO Services
      </h1>
      <p className="text-neutral-300 max-w-lg mx-auto text-center mt-4 relative z-30">
        Technology leadership and innovation strategy to drive your business forward
      </p>
    </div>

    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <TypewriterEffect
            words={[
              { text: "Innovative" },
              { text: "technology" },
              { text: "leadership" },
              { text: "for" },
              { text: "your" },
              { text: "business." },
            ]}
            className="text-4xl font-bold text-center mb-4"
            cursorClassName="bg-blue-500"
          />
          <p className="text-neutral-300 text-center max-w-2xl mx-auto">
            Empowering your organization with cutting-edge technology strategies and solutions.
          </p>
        </div>
        <HoverEffect items={services.map(service => ({ ...service, link: "#" }))} />
        </div>
    </div>
          
   

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Virtual CTO Approach</h2>
          <StickyScroll content={content} />
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Technology Experts</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <AnimatedTooltip items={team.map((member, index) => ({ ...member, id: index }))} />
          </div>
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Top Technologies We Work With</h2>
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
              <CardTitle className="text-2xl font-bold text-white">Ready to Elevate Your Technology Strategy?</CardTitle>
              <CardDescription className="text-neutral-300">
                Let's discuss how our Virtual CTO services can help your business innovate and grow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  Schedule a Technology Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Explore Our Tech Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

