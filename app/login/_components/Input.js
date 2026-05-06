"use client";

export default function Input({icon, type = 'text', children, ...props}) {
    return (
        <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"
                  data-icon={icon}>{icon}</span>
            <input
                className="w-full pl-12 pr-4 py-4 bg-surface rounded-lg border border-stone-200 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none text-on-surface placeholder:text-outline-variant font-medium"
                type={type}
                {...props}
            />
            {children}
        </div>
    );
}
