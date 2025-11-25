import Link from "next/link"
import { ArrowRight, Map } from "lucide-react"
import { WaitlistForm } from "./waitlist-form"

interface HeroProps {
    dict: any
}

export function Hero({ dict }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        v1.0 Coming Soon
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up animation-delay-100">
                        <span className="text-gradient">{dict.hero.title}</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                        {dict.hero.subtitle}
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
                        <WaitlistForm dict={dict} />
                    </div>
                </div>

                {/* Glass Mockup */}
                <div className="mt-20 relative max-w-5xl mx-auto animate-fade-in-up animation-delay-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-20 h-full w-full pointer-events-none"></div>
                    <div className="glass rounded-3xl p-4 border border-white/50 shadow-2xl transform rotate-x-12 perspective-1000">
                        <div className="bg-slate-50 rounded-2xl overflow-hidden aspect-[16/9] relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center"></div>
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                            <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/40">
                                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600">
                                    <Map className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Active Run View</h3>
                                <p className="text-slate-500">Map and route visualization placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
