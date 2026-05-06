"use client";

import PasswordInput from "./_components/PasswordInput";
import Input from "./_components/Input";
import {useEffect, useState} from "react";
import useAuth from "@/hooks/useAuth";
import {redirect} from "next/navigation";

export default function Login() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [user, login] = useAuth();

    useEffect(() => {
        if (user) {
            redirect("/user");
        }
    },[user]);

    function loginUser() {
        if (!identifier || identifier.trim() === "") return;

        const isSuccess = login(identifier, password);
        if (!isSuccess) {
            alert(`Wrong username or password, please try again...`);
        }
    }

    return (
        <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl"></div>
            <div
                className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl"></div>
            <div className="w-full max-w-md z-10">
                <div
                    className="bg-surface-container-lowest rounded-xl shadow-[0_8px_24px_rgba(27,67,50,0.08)] p-8 md:p-10 ">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-2">Welcome Back</h1>
                        <p className="text-on-surface-variant font-medium">Please enter your details to continue</p>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-on-surface-variant px-1">Email or Username</label>
                            <Input
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                icon="mail"
                                placeholder="Enter your credentials"/>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-on-surface-variant px-1">Password</label>
                            <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="pt-4">
                            <button
                                onClick={loginUser}
                                className="w-full py-4 bg-primary-container text-on-primary-container rounded-lg font-bold text-lg shadow-lg hover:shadow-primary-container/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}