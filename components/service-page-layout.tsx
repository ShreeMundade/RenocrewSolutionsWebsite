'use client'

import { BackgroundGradient } from "@/components/ui/background-gradient"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServicePageLayoutProps {
  title: string
  description: string
  features: {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }[]
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  className?: string
  children?: React.ReactNode
}

export function ServicePageLayout({
  title,
  description,
  features,
  benefits,
  process,
  className,
  children
}: ServicePageLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-black", className)}>
      <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-30">
          {title}
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto text-center mt-4 relative z-30">
          {description}
        </p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <BackgroundGradient key={idx} className="rounded-[22px] p-4 sm:p-10 bg-neutral-900">
                <feature.icon className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-300">{feature.description}</p>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </TracingBeam>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Key Benefits</CardTitle>
              <CardDescription className="text-neutral-300">
                Why choose our {title.toLowerCase()} services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-neutral-300">
                    <span className="text-cyan-500 font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, idx) => (
              <Card key={idx} className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold mb-4">
                    {idx + 1}
                  </div>
                  <CardTitle className="text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {children}

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-neutral-300 mb-8">
            Let's discuss how our {title.toLowerCase()} services can help your business grow.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

