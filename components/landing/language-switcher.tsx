"use client"

import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

export function LanguageSwitcher({ currentLang }: { currentLang: "en" | "fr" }) {
    const pathname = usePathname()
    const router = useRouter()

    const toggleLanguage = () => {
        const newLang = currentLang === "en" ? "fr" : "en"
        // Replace the language segment in the path
        const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`)
        router.push(newPath)
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-slate-600 hover:text-orange-600 font-medium"
        >
            {currentLang === "en" ? "FR" : "EN"}
        </Button>
    )
}
