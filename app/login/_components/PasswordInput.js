"use client";

import Input from "./Input";
import {useState} from "react";

export default function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input icon="lock" placeholder="••••••••" type={showPassword ? "text" : "password"} {...props}>
            <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                type="button">
                <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
            </button>
        </Input>
    );
}
