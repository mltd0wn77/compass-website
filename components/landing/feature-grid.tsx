import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ShoppingBag, Zap } from "lucide-react"

export function FeatureGrid({ dict }: { dict: any }) {
    const features = [
        {
            title: dict.discovery_title,
            description: dict.discovery_desc,
            icon: MapPin,
        },
        {
            title: dict.lists_title,
            description: dict.lists_desc,
            icon: ShoppingBag,
        },
        {
            title: dict.alerts_title,
            description: dict.alerts_desc,
            icon: Zap,
        },
    ]

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
