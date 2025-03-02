import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Linkedin, Instagram, ChevronDown, ExternalLink } from "lucide-react"
import Image from "next/image"
import { NavMenu } from "@/components/nav-menu"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* Navigation */}
      <NavMenu />

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter">성현준</h1>
            <p className="text-lg text-gray-400 max-w-[600px]">Unity와 최신 기술을 활용한 몰입감 있는 게임 경험 제작</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="border-white/10 hover:border-white/20 bg-transparent">
                <a href="mailto:blitss24@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  이메일
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/10 hover:border-white/20 bg-transparent">
                <a href="https://github.com/sung121" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/10 hover:border-white/20 bg-transparent">
                <a
                  href="https://www.linkedin.com/in/%ED%98%84%EC%A4%80-%EC%84%B1-169bb4308/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/10 hover:border-white/20 bg-transparent">
                <a href="https://www.instagram.com/hyeon_jun0822" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
        <a
          href="#skills"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">기술 스택</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <SkillCard
              title="C++"
              description="시스템 프로그래밍"
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QVTyaVtHW0W8oB8nd3MKQ25dbAeK8M.png"
            />
            <SkillCard
              title="C#"
              description="게임 개발"
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mIOSKoI7Ucd2dDyDxJOq0AsEg3QbEU.png"
            />
            <SkillCard
              title="Unity"
              description="게임 엔진"
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qRxuLrm2Emm9BdJs7mh38s3gnJtAJF.png"
            />
            <SkillCard
              title="Git"
              description="버전 관리"
              icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zzbDyefuQ67a9YVUosFIXLSP2nMNYi.png"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">포트폴리오</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Unity 게임 프로젝트</h3>
                <p className="text-gray-400 mb-4">Unity와 C#을 사용한 게임 개발 능력 showcase</p>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" className="border-white/10 hover:border-white/20 bg-transparent">
                    <a href="https://www.youtube.com/watch?v=lEsV8CS-_nE" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      유튜브 영상 보기
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/10 hover:border-white/20 bg-transparent">
                    <a href="https://github.com/sung121/GalaxyAdventure" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub 저장소
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

function SkillCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <Card className="bg-white/10 border-white/10 hover:bg-white/15 transition-colors">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 relative">
            <Image src={icon || "/placeholder.svg"} alt={`${title} icon`} fill className="object-contain" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

