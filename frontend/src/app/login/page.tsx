"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";  
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirm, setPasswordConfirm] = useState('');

  async function handleCreate (e:React.FormEvent) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await fetch('https://dotlove.onrender.com/user/auth/', {
        method: 'POST',
        // header 'Access-Control-Allow-Credentials', true
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.replace('/');
        console.log('Cadastro realizado com sucesso!');
      } else {
        console.log('Erro ao cadastrar');
        console.log(data);
        console.error('Registration failed');
      }
    } catch (error) {
      console.log(data);
      (error);
      console.error('Error during registration:', error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-between md:p-16 lg:p-24 pt-20 md:pt-32 text-white bg-gradient-to-tr dark:from-gray-800 dark:to-black-700">
      <section className="text-center">
        <header className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="Love Logo"
            width={130}
            height={130}
            className=""
          />
          <h1 className="text-3xl font-bold">
            Bem vindo ao <b>.Lov3</b>
          </h1>
        </header>
        <form onSubmit={handleCreate} className="mt-8 flex flex-col gap-4 text-gray-900">
          <input
            type="text"
            id="text"
            placeholder="usuario@email.com"
            onChange={e => setEmail(e.target.value)}
            className="p-3 rounded-full text-center"
          />
          <input
            type="password"
            id="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
            className="p-3 rounded-full text-center"
          />
          <button
            type="submit"
            className="text-white py-4 px-6 mx-auto max-w-sm h-15 w-60 text-center text-xl md:text-2xl font-bold rounded-full bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300"
          >
            Entrar
          </button>
        </form>
        <div className="flex flex-col gap-6 pt-4">
          <p className="mt-2 underline">Ainda não tem conta?</p>
          <Link href="/register">
            <p className="text-white py-4 px-6 mx-auto max-w-sm h-15 w-60 text-center text-xl md:text-2xl font-bold rounded-full bg-gradient-to-tl from-pink-400 via-pink-300 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-300">
              Cadastre-se
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
