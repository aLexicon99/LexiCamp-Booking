"use client";

import SectionHeader from "./SectionHeader";
import {useState} from "react";

export default function PaymentInfo() {
    const [cardNumber, setCardNumber] = useState("");
    const [expiration, setExpiration] = useState("");
    const [cvv, setCvv] = useState("");

    return (
        <div>
            <SectionHeader number="2">Payment Info</SectionHeader>
            <div className="space-y-6 bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(27,67,50,0.04)] border border-stone-100">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-widest px-1">
                        Card Number
                    </label>
                    <div className="relative">
                        <input
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full bg-white border border-stone-200 rounded-lg pl-4 pr-12 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                            placeholder="0000 0000 0000 0000" type="text"
                        />
                        <span
                            className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400"
                            data-icon="credit_card">credit_card</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label
                            className="text-xs font-bold text-stone-500 uppercase tracking-widest px-1">
                            Expiration
                        </label>
                        <input
                            onChange={(e) => setExpiration(e.target.value)}
                            className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                            placeholder="MM/YY"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-xs font-bold text-stone-500 uppercase tracking-widest px-1">
                            CVV
                        </label>
                        <input
                            onChange={(e) => setCvv(e.target.value)}
                            className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                            placeholder="123"
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
