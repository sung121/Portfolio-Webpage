import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Game Developer & Software Engineer
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Crafting immersive gaming experiences with Unity and modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard title="C++" description="Systems Programming" />
            <SkillCard title="C#" description="Game Development" />
            <SkillCard title="Unity" description="Game Engine" />
            <SkillCard title="Git" description="Version Control" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Featured Project</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/lEsV8CS-_nE"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardContent>
            </Card>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Unity Game Project</h3>
              <p className="text-muted-foreground">A showcase of my game development capabilities using Unity and C#</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SkillCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="relative group overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

