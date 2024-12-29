'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { WavyBackground } from "@/components/ui/wavy-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Target, Zap, Heart, Globe } from 'lucide-react'
import Link from 'next/link'

const companyValues = [
  {
    title: "Innovation",
    description: "We constantly seek new and better ways to solve problems and create value for our clients.",
    icon: Zap,
  },
  {
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical practices.",
    icon: Heart,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership with our clients.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from code to customer service.",
    icon: Target,
  },
  {
    title: "Continuous Learning",
    description: "We are committed to ongoing education and staying at the forefront of technology.",
    icon: BookOpen,
  },
  {
    title: "Global Perspective",
    description: "We embrace diversity and think globally in our solutions and partnerships.",
    icon: Globe,
  },
]

const teamMembers = [
  {
    name: "Shree m.",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Rohan B.",
    role: "CTO",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Pratik C.",
    role: "Data Engineer",
    image: "/placeholder.svg?height=100&width=100",
  },
 
  {
    name: "Manish Patil",
    role: "UX Designer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mohan P.",
    role: "Data Scientist",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const milestones = [
  {
    year: "2015",
    title: "Renocrew Founded",
    description: "Started as a small team of passionate developers and IT enthusiasts.",
  },
  {
    year: "2017",
    title: "Expansion of Services",
    description: "Introduced cloud solutions and IT consulting to our service offerings.",
  },
  {
    year: "2019",
    title: "100th Client Milestone",
    description: "Celebrated serving our 100th client across various industries.",
  },
  {
    year: "2021",
    title: "Global Reach",
    description: "Expanded operations to serve clients in over 20 countries.",
  },
  {
    year: "2023",
    title: "Innovation Lab Launch",
    description: "Opened our state-of-the-art innovation lab to drive cutting-edge solutions.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h1 className="text-4xl md:text-7xl font-bold text-center text-white">
          About Renocrew
        </h1>
        <p className="text-white max-w-lg mx-auto text-center mt-4">
          Empowering businesses with innovative technology solutions
        </p>
      </WavyBackground>

      <div className="py-12 text-white">
        <div className="text-white max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <TypewriterEffect
              words={[
                { text: "Innovation." },
                { text: "Expertise." },
                { text: "Partnership." },
                { text: "Excellence." },
              ]}
              className="text-white text-4xl font-bold text-center mb-4"
              cursorClassName="bg-blue-500"
            />
            <TextGenerateEffect words="At Renocrew, we're passionate about leveraging technology to drive business success. With years of experience and a team of skilled professionals, we deliver innovative IT solutions tailored to your unique needs." className="text-neutral-300 text-center max-w-2xl mx-auto" />
          </div>
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <HoverEffect items={companyValues.map(value => ({ ...value, link: "#" }))} />
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <BackgroundGradient key={index} className="rounded-[22px] p-4 sm:p-10 bg-neutral-900">
                <h3 className="text-2xl font-bold text-white mb-2">{milestone.year}</h3>
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">{milestone.title}</h4>
                <p className="text-neutral-300">{milestone.description}</p>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
          <AnimatedTooltip items={teamMembers.map((member, index) => ({ id: index, name: member.name, designation: member.role, image: member.image }))} />
          </div>

        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Our Mission</CardTitle>
              <CardDescription className="text-neutral-300">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300 mb-4">
                At Renocrew, we're committed to delivering cutting-edge IT solutions that transform businesses. Our team of experts works tirelessly to stay ahead of the technology curve, ensuring that our clients always have access to the most effective and innovative solutions available.
              </p>
              <p className="text-neutral-300 mb-4">
                We believe in building long-lasting partnerships with our clients, understanding their unique challenges, and crafting tailored solutions that drive real results. From software development to cloud services, IT consulting to virtual CTO services, we're here to guide you through every step of your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Link href="/contact">Partner with Us</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

