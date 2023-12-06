"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Navbar from "./components/navbar";

export default function Login() {
    return (
        <main className="flex flex-col items-center justify-between md:p-16 lg:p-24 pt-20 md:pt-32 text-white bg-gradient-to-tr dark:from-gray-800 dark:to-black-700">
            <section className="text-center">
                <div className="flex flex-col items-center">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={130}
                        height={130}
                        className=""
                    />
                    <h2 className="text-3xl font-bold">Bem vindo ao <b>.Lov3</b></h2>
                </div>
                    <form action="POST" className="mt-8 flex flex-col gap-4 text-gray-900">
                    <input type="text" placeholder="usuario@email.com"  className="p-3 rounded-full text-center"/>
                    <input type="password" placeholder="Senha" className="p-3 rounded-full text-center" />
                    <button type="submit" className="text-white py-4 px-6 mx-auto max-w-sm h-15 w-60 text-center text-xl md:text-2xl font-bold rounded-full bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300"> Entrar</button>
                    </form>
                <div>
                    <p className="mt-2 underline">Ainda não tem conta?</p>
                    <Link href="/login/register">
                        <p className="text-white py-4 px-6 mx-auto max-w-sm h-15 w-60 text-center text-xl md:text-2xl font-bold rounded-full bg-gradient-to-tl from-pink-400 via-pink-300 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-300">Cadastre-se</p>
                    </Link>
                </div>
            </section>
        </main>        
    );
}
