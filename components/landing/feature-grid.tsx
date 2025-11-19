import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ShoppingBag, Zap } from "lucide-react"

const features = [
    {
        title: "Local Store Discovery",
        description: "We index prices from all major grocery chains and local markets in your area.",
        icon: MapPin,
    },
    {
        title: "Smart Shopping Lists",
        description: "Build your list and let our algorithm split it to save you the most money.",
        icon: ShoppingBag,
    },
    {
        title: "Instant Price Alerts",
        description: "Get notified when your favorite items go on sale at nearby stores.",
        icon: Zap,
    },
]

export function FeatureGrid() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-sm bg-white/50 hover:bg-white transition-colors duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl font-semibold text-slate-900">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
