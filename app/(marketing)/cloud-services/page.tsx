import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, Database, Lock, Zap } from 'lucide-react'

const cloudProviders = [
  { name: 'Amazon Web Services (AWS)', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Microsoft Azure', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'Google Cloud Platform (GCP)', logo: '/placeholder.svg?height=60&width=60' },
  { name: 'DigitalOcean', logo: '/placeholder.svg?height=60&width=60' },
]

const services = [
  { name: 'Cloud Migration', description: 'Seamlessly move your infrastructure to the cloud', icon: Cloud },
  { name: 'Cloud-Native Development', description: 'Build scalable applications optimized for cloud environments', icon: Zap },
  { name: 'Database Management', description: 'Efficient and secure cloud database solutions', icon: Database },
  { name: 'Cloud Security', description: 'Protect your data and applications in the cloud', icon: Lock },
]

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Cloud Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Harness the power of the cloud with our comprehensive cloud services across major platforms.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {cloudProviders.map((provider) => (
            <Card key={provider.name} className="bg-gray-800 border-gray-700 flex flex-col items-center justify-center p-6">
              <img src={provider.logo} alt={provider.name} className="h-16 w-16 mb-4" />
              <h3 className="text-lg font-semibold text-white text-center">{provider.name}</h3>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.name} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <service.icon className="h-8 w-8 text-cyan-500 mb-4" />
                <CardTitle className="text-white">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to leverage the cloud?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Let's discuss how our cloud services can transform your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              Contact Us Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

