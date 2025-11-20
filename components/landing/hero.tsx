import { WaitlistForm } from "./waitlist-form"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, TrendingDown } from "lucide-react"

export function Hero({ dict }: { dict: any }) {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        {dict.badge}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                        {dict.title_start} <span className="text-primary">{dict.title_highlight}</span>{dict.title_end}
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-2xl">
                        {dict.description}
                    </p>

                    <div className="flex flex-col items-center w-full max-w-md mb-16">
                        <WaitlistForm dict={dict} />
                        <p className="text-xs text-slate-400 mt-4">
                            {dict.social_proof}
                        </p>
                    </div>

                    {/* Abstract App Visual */}
                    <div className="relative w-full max-w-5xl mx-auto">
                        <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                        <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>

                        <div className="relative bg-slate-50/50 border border-slate-200/60 backdrop-blur-xl rounded-2xl p-4 shadow-2xl ring-1 ring-slate-900/5">
                            <div className="aspect-[16/9] rounded-xl bg-white border border-slate-100 overflow-hidden flex items-center justify-center relative">
                                {/* Mock UI Elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-50"></div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 w-full max-w-4xl relative z-10">
                                    {/* Card 1 */}
                                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col gap-3">
                                        <div className="h-8 w-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                                            <ShoppingCart className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                                            <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                                        </div>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="h-4 w-12 bg-slate-100 rounded-full"></div>
                                            <div className="h-6 w-16 bg-green-50 text-green-600 text-xs font-medium rounded-full flex items-center justify-center">
                                                -$12.40
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 (Featured) */}
                                    <div className="bg-white rounded-xl shadow-md border border-orange-100 p-4 flex flex-col gap-3 transform scale-105 ring-2 ring-orange-500/10">
                                        <div className="flex justify-between items-start">
                                            <div className="h-8 w-8 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                                                <TrendingDown className="w-4 h-4" />
                                            </div>
                                            <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-full">BEST DEAL</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-32 bg-slate-100 rounded-full"></div>
                                            <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
                                        </div>
                                        <div className="mt-auto pt-2 border-t border-slate-50">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-bold text-slate-900">$84.50</span>
                                                <span className="text-xs text-slate-400 line-through">$112.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col gap-3">
                                        <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                            <ShoppingCart className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                                            <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                                        </div>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="h-4 w-12 bg-slate-100 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
