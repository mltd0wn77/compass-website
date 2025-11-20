"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

import { toast } from "sonner"

export function WaitlistForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        // Basic validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address")
            return
        }

        setStatus("loading")

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email }])

            if (error) {
                if (error.code === '23505') { // Unique violation
                    setStatus("success") // Treat duplicate as success to avoid leaking info/confusing user
                    toast.success("You're already on the list!")
                    return
                }
                throw error
            }

            setStatus("success")
            setEmail("")
            toast.success("Welcome to the waitlist!")
        } catch (error) {
            console.error('Error joining waitlist:', error)
            setStatus("idle")
            toast.error("Something went wrong. Please try again.")
        }
    }

    if (status === "success") {
        return (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full animate-in fade-in slide-in-from-bottom-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">You're on the list! We'll be in touch.</span>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/80 backdrop-blur-sm border-slate-200 focus-visible:ring-primary"
                disabled={status === "loading"}
            />
            <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Joining..." : "Join Waitlist"}
                {status === "idle" && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
        </form>
    )
}
