import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Zap } from 'lucide-react'
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="h-[93vh] flex flex-col bg-gray-900 text-gray-100">
      <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6">
        <section className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Welcome to CodeCompiler
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6 max-w-md mx-auto">
            Compile HTML, CSS, and JavaScript online with ease
          </p>
          <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            <Link to="/compiler">Try It Now</Link>
          </Button>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl mb-8">
          <FeatureCard
            icon={<Code className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />}
            title="Multi-language"
            description="HTML, CSS, JS"
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />}
            title="Instant Compile"
            description="See changes live"
          />
          <FeatureCard
            icon={<Layout className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />}
            title="Responsive"
            description="Test all devices"
          />
        </section>
      </main>

      <footer className="p-4 text-center text-sm text-gray-400">
        © 2024 CodeCompiler. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-colors">
      <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center h-full">
        <div className="mb-2 sm:mb-4">{icon}</div>
        <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-blue-300">{title}</h3>
        <p className="text-sm sm:text-base text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

