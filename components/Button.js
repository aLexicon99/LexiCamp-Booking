"use client";

/**
 * Shared Button component for the LexiCamp design system.
 * Built around reusable variants based on the Stitch design.
 */

export default function Button({
    children,
    id = null,
    variant = "primary",
    type = "button",
    onClick = null,
    extraCssClasses = "",
    ariaLabel,
}) {
    const baseClasses =
        "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer";

    const variants = {
        primary:
            "bg-[#F08A24] text-white rounded-md px-6 py-3 hover:bg-[#E67E22] shadow-[0_8px_18px_rgba(240,138,36,0.25)]",

        secondary:
            "bg-[#123F35] text-white rounded-md px-6 py-3 hover:bg-[#0F352C] shadow-[0_8px_18px_rgba(18,63,53,0.2)]",

        outline:
            "bg-white text-[#123F35] border border-[#D6D3D1] rounded-md px-6 py-3 hover:bg-[#F7F3EE]",

        filter:
            "bg-white text-[#1F2937] border border-[#D6D3D1] rounded-md px-4 py-2 hover:border-[#123F35] hover:bg-[#F7F3EE] shadow-sm",

        ghost:
            "bg-transparent text-[#374151] hover:bg-[#F3F4F6] rounded-md px-3 py-2",

        icon:
            "bg-white text-[#123F35] rounded-full w-10 h-10 p-0 hover:bg-[#F7F3EE] shadow-sm",
    };

    const variantClasses = variants[variant] ?? variants.primary;

    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            aria-label={ariaLabel}
            className={`${baseClasses} ${variantClasses} ${extraCssClasses}`}
        >
            {children}
        </button>
    );
}