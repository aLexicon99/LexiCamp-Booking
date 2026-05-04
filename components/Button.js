"use client";
/** Button komponenten har fem varianter, "primary", "secondary", "search", "arrow-backward", och "arrow-forward". 
   Variant anges via "variant" prop. Man kan ange en "buttonText" prop för att sätta texten på knappen, 
   och en "onclick" prop för att ange en funktion som ska köras när knappen klickas. Det går även att skicka 
   in egna css klasser via "extraCssClasses" prop.
*/
export default function Button({ children, variant = "primary", onClick = null, extraCssClasses = ""}) {
    if (variant === "primary") {
        return (
            <button className={`cursor-pointer not-first:text-white transition-all active:scale-95 pl-5 pr-5 pt-2 pb-2 rounded-3xl bg-green-700 ${extraCssClasses}`} onClick={ onClick != null ? onClick : null } >
                { children }
            </button>
        );
    }
    else if (variant === "secondary") {
        return (
            <button className={`cursor-pointer text-black transition-all active:scale-95 pl-5 pr-5 pt-2 pb-2 rounded-3xl secondary bg-green-300 ${extraCssClasses}`} onClick={ onClick != null ? onClick : null }>
                { children }
            </button>
        );
    }
    else if (variant === "outlined") {
        return (
            <button className={`cursor-pointer text-black transition-all active:scale-95 pl-5 pr-5 pt-2 pb-2 rounded-3xl border secondary bg-white ${extraCssClasses}`} onClick={ onClick != null ? onClick : null }>
                { children }
            </button>
        );
    }
    else if (variant === "search") {
        return (
            <button className={`cursor-pointer text-white transition-all active:scale-95 pl-5 pr-5 pt-2 pb-2 rounded-xl bg-green-700 ${extraCssClasses}`} onClick={ onClick != null ? onClick : null }>
                <img src="../images/icons/search-icon.webp" className="w-5 h-5 mr-1 inline" />{ children }
            </button>
        );        
    }
    else if (variant === "arrow-forward") {
        return (
            <button className={`cursor-pointer text-white text-xl transition-all active:scale-95 pl-4 pr-4 pt-1 pb-1 rounded-lg bg-green-700 ${extraCssClasses}`} onClick={ onClick != null ? onClick : null }> 
                <b>&gt;</b>
            </button>
        );
    }
    else if (variant === "arrow-backward") {
        return (
            <button className={`cursor-pointer text-white text-xl transition-all active:scale-95 pl-4 pr-4 pt-1 pb-1 rounded-lg bg-green-700 ${extraCssClasses}`} onClick={ onClick != null ? onClick : null }> 
                <b>&lt;</b>
            </button>
        );
    }
}