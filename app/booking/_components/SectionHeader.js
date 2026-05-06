"use client";

export default function SectionHeader({number, children}) {
    return (
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-sm">
                {number}
            </span>
            {children}
        </h2>
    );
}
