"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [username, setUsername] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [bio, setBio] = useState('');
    const [photos, setPhotos] = useState('');

    async function handleCreate(e: React.FormEvent) {
        e.preventDefault();
        const data = {
            username,
            email,
            password,
            birthdate,
            gender,
            bio,
            photos
        };
        try {
            const response = await fetch('https://dotlove.onrender.com/user/', {
                method: 'POST',
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
            console.log(error);
        }
    }
    return (
        <main className="flex flex-col items-center justify-between md:p-16 lg:p-24 pt-20 md:pt-32 text-white bg-gradient-to-tr dark:from-gray-800 dark:to-black-700 flex-wrap">
            <header>
                <h1 className="text-3xl font-bold ">Bem vindo ao Cadastro no .Lov3</h1>
            </header>
            <form onSubmit={handleCreate} >
                <section className="mt-8 flex flex-col gap-4 text-gray-900">
                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="text" className="text-xl text-white font-bold">Nome de usuario:</label>
                        <input type="text" placeholder="Nome de Usuario" className="p-3 rounded-full text-center" id="text"
                        onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="email" className="text-xl text-white font-bold font-bold">Email</label>
                        <input type="email" id="email" placeholder="exemplo@email.com" className="p-3 rounded-full text-center" 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="password" className="text-xl text-white font-bold">Senha: </label>
                        <input type="password" id="password" placeholder="Senha" className="p-3 rounded-full text-center" 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="password" id="password" className="text-xl text-white font-bold">Confirme a Senha: </label>
                        <input type="password" placeholder="Confirme a Senha" className="p-3 rounded-full text-center" 
                        onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="birthdate" className="text-xl text-white font-bold">Data de Nascimento: </label>
                        <input type="date" id="birthdate" placeholder="Data de Nascimento" className="p-3 rounded-full text-center" 
                        onChange={(e) => setBirthdate(e.target.value)}/>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="checkbox" className="text-xl text-white font-bold">Genero: </label>
                        <div className="flex gap-4">
                            <input type="checkbox" name="gender" id="male" className="w-4" 
                            onChange={(e) => setGender(e.target.value)}/>
                            <label htmlFor="male" className="text-xl text-white ">Masculino</label>
                            <input type="checkbox" name="gender" id="female" className="w-4" 
                            onChange={(e) => setGender(e.target.value)}/>
                            <label htmlFor="female" className="text-xl text-white ">Feminno</label>
                            <input type="checkbox" name="gender" id="not" className="w-4" 
                            onChange={(e) => setGender(e.target.value)}/>
                            <label htmlFor="not" className="text-xl text-white ">Não informar</label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="bio" className="text-xl text-white font-bold">Biografia: </label>
                        <input type="text-area" placeholder="Biografia" name="bio" id="bio"
                        className="p-3 rounded-xl"
                        onChange={(e) => setBio(e.target.value)}/>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <label htmlFor="bio" className="text-xl text-white font-bold">Foto:</label>
                        <input type="file" name="photos" id="photos" className="" 
                        onChange={(e) => setPhotos(e.target.value)}/>
                    </div>
                    <button type="submit" className="text-white py-4 px-6 mx-auto max-w-sm h-15 w-60 text-center text-xl md:text-2xl font-bold rounded-full bg-gradient-to-tl from-pink-400 via-pink-300 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-300">
                        Cadastre-se
                    </button>
                </section>
            </form>
        </main>
    );
}