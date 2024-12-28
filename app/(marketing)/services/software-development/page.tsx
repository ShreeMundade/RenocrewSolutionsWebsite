'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Layout, Smartphone, Server, Cloud } from 'lucide-react'

const services = [
  {
    title: "Web Applications",
    description: "Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies.",
    icon: Layout,
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: Smartphone,
  },
  {
    title: "Enterprise Software",
    description: "Scalable and secure enterprise solutions tailored to your business needs.",
    icon: Server,
  },
  {
    title: "API Development",
    description: "Robust and scalable APIs to power your applications and integrate with third-party services.",
    icon: Cloud,
  },
  {
    title: "Database Solutions",
    description: "Efficient database design and implementation for optimal data management.",
    icon: Database,
  },
  {
    title: "Legacy System Modernization",
    description: "Upgrade and modernize your existing systems for improved performance and functionality.",
    icon: Code,
  },
]

const content = [
  {
    title: "Cutting-edge Technologies",
    description: "We leverage the latest technologies and frameworks to build modern, scalable applications.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-indigo-300 to-purple-300 flex items-center justify-center text-white">
        <Code size={100} />
      </div>
    ),
  },
  {
    title: "Agile Development Process",
    description: "Our agile methodology ensures rapid development cycles and continuous improvement.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-300 to-teal-300 flex items-center justify-center text-white">
        <Server size={100} />
      </div>
    ),
  },
  {
    title: "Cross-platform Solutions",
    description: "We create applications that work seamlessly across web, mobile, and desktop platforms.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-pink-300 to-red-300 flex items-center justify-center text-white">
        <Smartphone size={100} />
      </div>
    ),
  },
  {
    title: "Scalable Architecture",
    description: "Our solutions are designed to scale with your business, ensuring long-term success.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-300 to-cyan-300 flex items-center justify-center text-white">
        <Database size={100} />
      </div>
    ),
  },
]

const team = [
  {
    name: "John Doe",
    designation: "Lead Developer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    designation: "UX Designer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mike Johnson",
    designation: "Project Manager",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Brown",
    designation: "QA Specialist",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const topSoftware = [
  "React", "Next.js", "Node.js", "Python", "Java", "Swift", "Kotlin", "PostgreSQL", "MongoDB", "Docker"
]

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-30">
          Software Development
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto text-center mt-4 relative z-30">
          Custom software solutions tailored to your business needs
        </p>
      </div>

        <div className="text-white max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <TypewriterEffect 
            words={[
              { text: "We" },
              { text: "build" },
              { text: "innovative" },
              { text: "software" },
              { text: "solutions." },
            ]}
            className="text-4xl font-bold text-center mb-4"
              cursorClassName="bg-blue-500"
            />
            <p className="text-neutral-300 text-center max-w-2xl mx-auto">
              Empowering your organization with cutting-edge technology strategies and solutions.
            </p>
         <HoverEffect items={services.map(service => ({ ...service, link: "#" }))} />
         </div>
     

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Development Process</h2>
          <StickyScroll content={content} />
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
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
              <CardTitle className="text-2xl font-bold text-white">Ready to Start Your Project?</CardTitle>
              <CardDescription className="text-neutral-300">
                Let's discuss how we can create a custom software solution for your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  Get a Free Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Our Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

