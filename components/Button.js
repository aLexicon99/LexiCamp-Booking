"use client";
/** Button komponenten har fem varianter, "primary", "secondary", "search", "arrow-backward", och "arrow-forward". 
   Variant anges via "variant" prop. Man kan ange en "buttonText" prop för att sätta texten på knappen, 
   och en "onclick" prop för att ange en funktion som ska köras när knappen klickas. Det går även att skicka 
   in egna css klasser via "extraCssClasses" prop.
*/
export default function Button({ variant = "primary", buttonText = "", onclick = null, extraCssClasses = ""}) {
    if (variant === "primary") {
        return (
            <button className={`transition-all active:scale-95 ${extraCssClasses}`} onClick={ onclick != null ? onclick : null } >
                { buttonText }
            </button>
        );
    }
    else if (variant === "secondary") {
        return (
            <button className={`transition-all active:scale-95 secondary ${extraCssClasses}`} onClick={ onclick != null ? onclick : null }>
                { buttonText }
            </button>
        );
    }
    else if (variant === "search") {
        return (
            <button className={`transition-all active:scale-95 ${extraCssClasses}`} onClick={ onclick != null ? onclick : null }>
                <img src="../images/icons/search-icon.webp" className="w-5 h-5 mr-1 inline" />{ buttonText }
            </button>
        );        
    }
    else if (variant === "arrow-forward") {
        return (
            <button className={`transition-all active:scale-95 ${extraCssClasses}`} onClick={ onclick != null ? onclick : null }> 
                <b>&gt;</b>
            </button>
        );
    }
    else if (variant === "arrow-backward") {
        return (
            <button className={`transition-all active:scale-95 ${extraCssClasses}`} onClick={ onclick != null ? onclick : null }> 
                <b>&lt;</b>
            </button>
        );
    }
}