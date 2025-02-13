import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Game Developer & Software Engineer
            </h1>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <span>Member of</span>
              <a
                href="https://cafe.naver.com/hidingpowergames"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-primary transition-colors"
              >
                Hiding Games
              </a>
            </div>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Crafting immersive gaming experiences with Unity and modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="mailto:blitss24@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/sung121" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <SkillCard
              title="C++"
              description="Systems Programming"
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QVTyaVtHW0W8oB8nd3MKQ25dbAeK8M.png"
            />
            <SkillCard
              title="C#"
              description="Game Development"
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mIOSKoI7Ucd2dDyDxJOq0AsEg3QbEU.png"
            />
            <SkillCard
              title="Unity"
              description="Game Engine"
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qRxuLrm2Emm9BdJs7mh38s3gnJtAJF.png"
            />
            <SkillCard
              title="Git"
              description="Version Control"
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fdEKSaZ0d6B799o69lFVK48gdQg2GQ.png"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
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
    </main>
  )
}

function SkillCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <Card className="relative group overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 relative">
            <Image src={icon || "/placeholder.svg"} alt={`${title} icon`} fill className="object-contain" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

