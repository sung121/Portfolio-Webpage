"use client"

import { useState, useEffect } from "react"

export const languages = ["ko", "en"] as const
export type Language = (typeof languages)[number]

const translations = {
  ko: {
    title: "게임 개발자 & 소프트웨어 엔지니어",
    memberOf: "소속:",
    description: "Unity와 최신 기술을 활용한 몰입감 있는 게임 경험 제작",
    email: "이메일",
    technicalSkills: "기술 스택",
    portfolio: "포트폴리오",
    unityGameProject: "Unity 게임 프로젝트",
    projectDescription: "Unity와 C#을 사용한 게임 개발 능력 showcase",
    systemsProgramming: "시스템 프로그래밍",
    gameDevelopment: "게임 개발",
    gameEngine: "게임 엔진",
    versionControl: "버전 관리",
    viewProject: "프로젝트 보기",
    home: "홈",
    skills: "기술",
  },
  en: {
    title: "Game Developer & Software Engineer",
    memberOf: "Member of",
    description: "Crafting immersive gaming experiences with Unity and modern technologies",
    email: "Email",
    technicalSkills: "Technical Skills",
    portfolio: "Portfolio",
    unityGameProject: "Unity Game Project",
    projectDescription: "A showcase of my game development capabilities using Unity and C#",
    systemsProgramming: "Systems Programming",
    gameDevelopment: "Game Development",
    gameEngine: "Game Engine",
    versionControl: "Version Control",
    viewProject: "View Project",
    home: "Home",
    skills: "Skills",
  },
}

export function useTranslation() {
  const [language, setLanguage] = useState<Language>("ko")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && languages.includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: keyof (typeof translations)["ko"]) => {
    return translations[language][key]
  }

  return { t, language, changeLanguage }
}

