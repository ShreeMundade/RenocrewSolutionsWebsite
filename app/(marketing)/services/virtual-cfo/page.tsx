'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, PieChart, FileText, Users, Target, Shield } from 'lucide-react'

const services = [
  {
    title: "Financial Strategy",
    description: "Develop and implement effective financial strategies for sustainable growth.",
    icon: DollarSign,
  },
  {
    title: "Budgeting & Forecasting",
    description: "Create accurate budgets and financial forecasts to guide decision-making.",
    icon: TrendingUp,
  },
  {
    title: "Financial Analysis",
    description: "In-depth analysis of financial data to uncover insights and opportunities.",
    icon: PieChart,
  },
  {
    title: "Financial Reporting",
    description: "Comprehensive financial reports tailored to your business needs.",
    icon: FileText,
  },
  {
    title: "Stakeholder Management",
    description: "Effective communication with investors, board members, and other stakeholders.",
    icon: Users,
  },
  {
    title: "Performance Metrics",
    description: "Establish and track key financial performance indicators (KPIs).",
    icon: Target,
  },
]

const  content = [
  {
    title: "Strategic Financial Planning",
    description: "We help you develop long-term financial strategies aligned with your business goals.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-yellow-300 to-orange-300 flex items-center justify-center text-white">
        <DollarSign size={100} />
      </div>
    ),
  },
  {
    title: "Cash Flow Management",
    description: "Optimize your cash flow to ensure financial stability and growth opportunities.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-300 to-teal-300 flex items-center justify-center text-white">
        <TrendingUp size={100} />
      </div>
    ),
  },
  {
    title: "Financial Risk Assessment",
    description: "Identify and mitigate financial risks to protect your business.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-red-300 to-pink-300 flex items-center justify-center text-white">
        <Shield size={100} />
      </div>
    ),
  },
  {
    title: "Mergers & Acquisitions Support",
    description: "Expert guidance through M&A processes, from due diligence to integration.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center text-white">
        <Users size={100} />
      </div>
    ),
  },
]

const team = [
  {
    name: "Jennifer Lee",
    designation: "Senior Financial Advisor",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mark Thompson",
    designation: "Financial Analyst",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sophia Rodriguez",
    designation: "Risk Management Specialist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Daniel Kim",
    designation: "M&A Expert",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const topSoftware = [
  "QuickBooks", "Xero", "NetSuite", "Sage Intacct", "FreshBooks", 
  "Wave", "Zoho Books", "Microsoft Dynamics 365", "SAP Business One", "Oracle NetSuite"
]

export default function VirtualCFOPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-30">
          Virtual CFO Services
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto text-center mt-4 relative z-30">
          Expert financial guidance and strategic planning for your business
        </p>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TypewriterEffect 
            words={[
              { text: "Strategic" },
              { text: "financial" },
              { text: "leadership" },
              { text: "for" },
              { text: "your" },
              { text: "business." },
            ]}
            className="text-4xl font-bold text-center text-white mb-8"
          />
          <HoverEffect items={services.map(service => ({ ...service, link: '#' }))} />
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Virtual CFO Process</h2>
          <StickyScroll content={content} />
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Financial Experts</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <AnimatedTooltip items={team.map((member, index) => ({ ...member, id: index }))} />
          </div>
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Top Financial Software We Work With</h2>
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
              <CardTitle className="text-2xl font-bold text-white">Ready to Elevate Your Financial Strategy?</CardTitle>
              <CardDescription className="text-neutral-300">
                Let's discuss how our Virtual CFO services can help your business grow and succeed.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  Schedule a Financial Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Download Our Service Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

