import { Hero } from "@/components/landing/hero"
import { FeatureGrid } from "@/components/landing/feature-grid"
import { getDictionary } from "./dictionaries"
import { LanguageSwitcher } from "@/components/landing/language-switcher"

export default async function Home({ params: { lang } }: { params: { lang: "en" | "fr" } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container px-4 mx-auto py-6 flex items-center justify-between">
          <div className="flex items-center gap-2" aria-label="Grocery Compass Home">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="w-5 h-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Grocery Compass</span>
          </div>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </nav>

      <Hero dict={dict.hero} />
      <FeatureGrid dict={dict.features} />

      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="container px-4 mx-auto text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Grocery Compass. {dict.footer.rights}</p>
        </div>
      </footer>
    </main>
  )
}
