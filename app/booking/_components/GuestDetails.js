"use client";

import SectionHeader from "@/app/booking/_components/SectionHeader";
import {useState} from "react";
import useAuth from "@/hooks/useAuth";

export default function GuestDetails() {
    const [user] = useAuth();
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [email, setEmail] = useState(user?.email || "");

    return (
        <div>
            <SectionHeader number="1">Guest Details</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(27,67,50,0.04)] border border-stone-100">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest px-1">
                        First Name
                    </label>
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="Julian"
                        type="text"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest px-1">
                        Last Name
                    </label>
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="Rivers"
                        type="text"
                    />
                </div>
                <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest px-1">
                        Email Address
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="julian.rivers@example.com"
                        type="email"
                    />
                </div>
            </div>
        </div>
    );
}
