"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

import { toast } from "sonner"

interface WaitlistDict {
    waitlist_error_invalid_email: string
    waitlist_success_already_on_list: string
    waitlist_success_welcome: string
    waitlist_error_generic: string
    waitlist_success: string
    waitlist_placeholder: string
    waitlist_button_loading: string
    waitlist_button_idle: string
}

export function WaitlistForm({ dict }: { dict: WaitlistDict }) {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        // Basic validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error(dict.waitlist_error_invalid_email)
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
                    toast.success(dict.waitlist_success_already_on_list)
                    return
                }
                throw error
            }

            setStatus("success")
            setEmail("")
            toast.success(dict.waitlist_success_welcome)
        } catch (error) {
            console.error('Error joining waitlist:', error)
            setStatus("idle")
            toast.error(dict.waitlist_error_generic)
        }
    }

    if (status === "success") {
        return (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full animate-in fade-in slide-in-from-bottom-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">{dict.waitlist_success}</span>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="email"
                placeholder={dict.waitlist_placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/80 backdrop-blur-sm border-slate-200 focus-visible:ring-primary"
                disabled={status === "loading"}
            />
            <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? dict.waitlist_button_loading : dict.waitlist_button_idle}
                {status === "idle" && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
        </form>
    )
}
