import { Hero } from "@/components/landing/hero"
import { FeatureGrid } from "@/components/landing/feature-grid"
import { getDictionary } from "./dictionaries"
import { LanguageSwitcher } from "@/components/landing/language-switcher"

export default async function Home({ params: { lang } }: { params: { lang: "en" | "fr" } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900 relative">
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-400/20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-red-400/20 blur-[100px] animate-pulse animation-delay-2000"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
        <div className="container px-4 mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center gap-2" aria-label="Grocery Compass Home">
            <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
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

      <div className="relative z-10">
        <Hero dict={dict.hero} />
        <FeatureGrid dict={dict.features} />

        <footer className="bg-white/50 backdrop-blur-sm border-t border-slate-200 py-12">
          <div className="container px-4 mx-auto text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Grocery Compass. {dict.footer.rights}</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
