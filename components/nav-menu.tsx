"use client"
import { Button } from "@/components/ui/button"
import { useTranslation, type translations } from "@/utils/i18n"

export function NavMenu() {
  const { t, language, changeLanguage } = useTranslation()

  return (
    <nav className="fixed top-0 right-0 p-4 z-50 flex items-center gap-6">
      <Button
        variant="ghost"
        className="text-white hover:text-white/80 hover:bg-transparent"
        onClick={() => changeLanguage(language === "ko" ? "en" : "ko")}
      >
        {language === "ko" ? "EN" : "KO"}
      </Button>
      {[
        { key: "home", href: "#home" },
        { key: "skills", href: "#skills" },
        { key: "portfolio", href: "#portfolio" },
      ].map((item) => (
        <a key={item.key} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
          {t(item.key as keyof (typeof translations)["ko"])}
        </a>
      ))}
    </nav>
  )
}

