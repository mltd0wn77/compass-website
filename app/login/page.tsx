"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { login } from "./actions"
import { toast } from "sonner"

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        const result = await login(formData)
        setIsLoading(false)

        if (result?.error) {
            toast.error(result.error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        Early Access
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Please enter the password to view the site.
                    </p>
                </div>
                <form action={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <Input
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        disabled={isLoading}
                    >
                        {isLoading ? "Verifying..." : "Enter"}
                    </Button>
                </form>
            </div>
        </div>
    )
}
