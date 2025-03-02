"use client"

export function NavMenu() {
  return (
    <nav className="fixed top-0 right-0 p-4 z-50 flex items-center gap-6">
      {[
        { key: "home", href: "#home" },
        { key: "skills", href: "#skills" },
        { key: "portfolio", href: "#portfolio" },
      ].map((item) => (
        <a key={item.key} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
          {item.key === "home" ? "홈" : item.key === "skills" ? "기술" : "포트폴리오"}
        </a>
      ))}
    </nav>
  )
}

