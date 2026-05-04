"use client";

import CancellationPolicyInfo from "./_components/CancellationPolicyInfo";
import GuestDetails from "./_components/GuestDetails";
import PaymentInfo from "./_components/PaymentInfo";
import Link from "next/link";

export default function Booking() {
    return (
        <div className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <header className="mb-12">
                {/*TODO Back to site details link*/}
                <Link href="/">
                    <div
                        className="flex items-center gap-2 text-stone-500 mb-4 cursor-pointer hover:text-emerald-900 transition-colors">
                        <span className="material-symbols-outlined text-lg" data-icon="arrow_back">arrow_back</span>
                        <span className="text-sm font-semibold uppercase tracking-wider">Back to site details</span>
                    </div>
                </Link>
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">Confirm &amp; Pay</h1>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <section className="lg:col-span-7 space-y-12">
                    <GuestDetails/>
                    <PaymentInfo/>
                    <CancellationPolicyInfo/>
                </section>
                {/*    TODO BookingDetails*/}
            </div>
        </div>
    );
}



