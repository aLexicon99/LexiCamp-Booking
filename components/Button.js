"use client";
/** Button komponenten har sex varianter, "primary", "secondary", outlined, "search", "arrow-backward", och "arrow-forward".
   Variant anges via "variant" prop. Sätta texten på knappen görs genom att skicka texten den som children. Knappen har även en "onClick" prop
   för att ange en funktion som ska köras när knappen klickas. Det går även att skicka sin egna css klasser via "extraCssClasses" prop.
*/
export default function Button({ children, variant = "primary", onClick = null, extraCssClasses = ""})
{
   const buttonCss = "transition-transform duration-200 hover:-translate-y-0.5 transition-all active:scale-95 hover:shadow-[0_4px_12px_rgba(0,51,102,0.3)] cursor-pointer";

   if (variant === "primary") {
        return (
            <button className={`${extraCssClasses} ${buttonCss} text-white pl-5 pr-5 pt-2 pb-2 rounded-3xl bg-green-700`} onClick={ onClick != null ? onClick : null } >
                { children }
            </button>
        );
    }
    else if (variant === "secondary") {
        return (
            <button className={`${extraCssClasses} ${buttonCss} text-black pl-5 pr-5 pt-2 pb-2 rounded-3xl secondary bg-green-300`} onClick={ onClick != null ? onClick : null }>
                { children }
            </button>
        );
    }
    else if (variant === "outlined") {
        return (
            <button className={`${extraCssClasses} ${buttonCss} text-black pl-5 pr-5 pt-2 pb-2 rounded-3xl border secondary bg-white`} onClick={ onClick != null ? onClick : null }>
                { children }
            </button>
        );
    }
    else if (variant === "search") {
        return (
            <button className={`${buttonCss} text-white pl-5 pr-5 pt-2 pb-2 rounded-xl bg-green-700 ${extraCssClasses}`} onClick={ onClick != null ? onClick : null }>
                <img src="../images/icons/search-icon.webp" className="w-5 h-5 mr-1 inline" />{ children }
            </button>
        );
    }
    else if (variant === "arrow-forward") {
        return (
            <button className={`${extraCssClasses} ${buttonCss} text-white text-xl pl-4 pr-4 pt-1 pb-1 rounded-lg bg-green-700`} onClick={ onClick != null ? onClick : null }>
                <b>&gt;</b>
            </button>
        );
    }
    else if (variant === "arrow-backward") {
        return (
            <button className={`${extraCssClasses} ${buttonCss} text-white text-xl pl-4 pr-4 pt-1 pb-1 rounded-lg bg-green-700`} onClick={ onClick != null ? onClick : null }>
                <b>&lt;</b>
            </button>
        );
    }
}
