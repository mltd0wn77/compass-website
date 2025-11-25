import { Zap, Navigation, List, TrendingUp } from "lucide-react"

interface FeatureGridProps {
    dict: {
        title: string
        optimization: { title: string; description: string }
        navigation: { title: string; description: string }
        lists: { title: string; description: string }
        savings: { title: string; description: string }
    }
}

export function FeatureGrid({ dict }: FeatureGridProps) {
    const features = [
        {
            icon: Zap,
            title: dict.optimization.title,
            description: dict.optimization.description,
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            icon: Navigation,
            title: dict.navigation.title,
            description: dict.navigation.description,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: List,
            title: dict.lists.title,
            description: dict.lists.description,
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            icon: TrendingUp,
            title: dict.savings.title,
            description: dict.savings.description,
            color: "text-green-500",
            bg: "bg-green-50"
        }
    ]

    return (
        <section className="py-24 relative">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{dict.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
