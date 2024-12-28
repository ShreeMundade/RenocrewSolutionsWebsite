'use client'

import { ServicePageLayout } from '@/components/service-page-layout'
import { BookOpen, FileText, Calculator, BarChart, Clock, Shield } from 'lucide-react'
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const financialTools = [
  {
    title: "QuickBooks Integration",
    description: "Seamless integration with QuickBooks for efficient bookkeeping and accounting.",
  },
  {
    title: "Xero Setup",
    description: "Expert setup and management of Xero accounting software for your business.",
  },
  {
    title: "Custom Financial Dashboards",
    description: "Tailored financial dashboards for real-time insights into your business performance.",
  },
  {
    title: "Automated Expense Tracking",
    description: "Implement automated systems for accurate and efficient expense tracking.",
  },
]

const testimonials = [
  {
    quote: "Renocrew's accounting services have transformed our financial management. Highly recommended!",
    name: "Sarah Johnson",
    title: "CFO, TechStart Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Their bookkeeping expertise has saved us time and money. A game-changer for our business.",
    name: "Michael Chen",
    title: "Owner, Chen's Retail Group",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function AccountingBookkeepingPage() {
  return (
    <ServicePageLayout
      title="Accounting & Bookkeeping"
      description="Streamline your financial operations with our expert accounting and bookkeeping services."
      features={[
        {
          title: "Bookkeeping",
          description: "Accurate and timely recording of financial transactions.",
          icon: BookOpen
        },
        {
          title: "Financial Reporting",
          description: "Comprehensive reports for informed decision-making.",
          icon: FileText
        },
        {
          title: "Tax Preparation",
          description: "Efficient and compliant tax filing services.",
          icon: Calculator
        },
        {
          title: "Financial Analysis",
          description: "In-depth analysis of your financial performance.",
          icon: BarChart
        },
        {
          title: "Payroll Services",
          description: "Accurate and timely payroll processing and reporting.",
          icon: Clock
        },
        {
          title: "Audit Support",
          description: "Expert assistance during financial audits.",
          icon: Shield
        }
      ]}
      benefits={[
        "Improved financial accuracy and compliance",
        "Time-saving through efficient processes",
        "Expert financial insights for better decision-making",
        "Reduced risk of financial errors and fraud",
        "Scalable solutions for growing businesses",
        "Access to cutting-edge financial technologies",
        "Customized reporting tailored to your needs",
        "Peace of mind with expert financial management"
      ]}
      process={[
        {
          title: "Initial Assessment",
          description: "We evaluate your current financial processes and needs."
        },
        {
          title: "Customized Plan",
          description: "Development of a tailored accounting and bookkeeping strategy."
        },
        {
          title: "Implementation",
          description: "Setting up systems and processes for efficient financial management."
        },
        {
          title: "Regular Bookkeeping",
          description: "Ongoing maintenance of financial records and transactions."
        },
        {
          title: "Reporting & Analysis",
          description: "Regular financial reports and insights for your business."
        },
        {
          title: "Continuous Improvement",
          description: "Regular reviews and updates to optimize your financial processes."
        }
      ]}
    >
      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Financial Tools & Integrations</h2>
          <HoverEffect items={financialTools.map(tool => ({ ...tool, link: '#' }))} />
        </div>
      </div>

      <div className="py-12">s
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Ready for Financial Excellence?</CardTitle>
              <CardDescription className="text-neutral-300">
                Let's discuss how our accounting and bookkeeping services can streamline your financial operations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Download Service Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ServicePageLayout>
  )
}

