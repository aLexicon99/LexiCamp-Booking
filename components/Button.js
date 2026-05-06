"use client";
/**    
    The Button component has six variants, "primary", "secondary", outlined, "search", "arrow-backward", and "arrow-forward".
    Variant is set trough the "variant" prop. Setting the text on the button is done by sending the text as children to the button .
    The button also has an "onClick" prop to set a function that should run when the button is clicked. It's also possible to set you
    own css classes trough the "extraCssClasses" prop.
*/
export default function Button({ children, id = null, variant = "primary", onClick = null, extraCssClasses = "" })
{
   const buttonCss = "transition-transform duration-200 hover:-translate-y-0.5 transition-all active:scale-95 hover:shadow-[0_4px_12px_rgba(0,51,102,0.3)] cursor-pointer";

   if (variant === "primary") {
        return (
            <button id={id} className={`${extraCssClasses} ${buttonCss} text-white pl-5 pr-5 pt-2 pb-2 rounded-3xl bg-green-700`} onClick={ onClick != null ? onClick : null } >
                { children }
            </button>
        );
    }
    else if (variant === "secondary") {
        return (
            <button id={id} className={`${extraCssClasses} ${buttonCss} text-black pl-5 pr-5 pt-2 pb-2 rounded-3xl secondary bg-green-300`} onClick={ onClick != null ? onClick : null }>
                { children }
            </button>
        );
    }
    else if (variant === "outlined") {
        return (
            <button id={id} className={`${extraCssClasses} ${buttonCss} text-black pl-5 pr-5 pt-2 pb-2 rounded-3xl border secondary bg-white`} onClick={ onClick != null ? onClick : null }>
                { children }
            </button>
        );
    }
    else if (variant === "search") {
        return (
            <button id={id} className={`${buttonCss} text-white pl-5 pr-5 pt-2 pb-2 rounded-xl bg-green-700 ${extraCssClasses}`} onClick={ onClick != null ? onClick : null }>
                <img src="../images/icons/search-icon.webp" className="w-5 h-5 mr-1 inline" />{ children }
            </button>
        );
    }
    else if (variant === "arrow-forward") {
        return (
            <button id={id} className={`${extraCssClasses} ${buttonCss} text-white text-xl pl-4 pr-4 pt-1 pb-1 rounded-lg bg-green-700`} onClick={ onClick != null ? onClick : null }>
                <b>&gt;</b>
            </button>
        );
    }
    else if (variant === "arrow-backward") {
        return (
            <button id={id} className={`${extraCssClasses} ${buttonCss} text-white text-xl pl-4 pr-4 pt-1 pb-1 rounded-lg bg-green-700`} onClick={ onClick != null ? onClick : null }>
                <b>&lt;</b>
            </button>
        );
    }
}
