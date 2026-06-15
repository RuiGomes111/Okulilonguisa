"use client";
import {useEffect} from "react";

export default function Login() {

    useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedAge = localStorage.getItem("age");
    if (storedName && storedAge) {
        // Se os dados existirem, redireciona para a página de níveis
        window.location.href = "/niveis";
    }
}, []);

const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const age = formData.get("age") as string;
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    // Redireciona para a página de níveis após o login
    window.location.href = "/niveis";
}

    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-4 bg-gradient-to-br from-blue-300 via-sky-400 to-cyan-500 p-6">
      <form onSubmit={handlesubmit} className="bg-white shadow-2xl rounded-3xl p-10 text-center w-full max-w-md">
            <h1 className="text-6xl mb-4">🎮</h1>
            <h2 className="text-3xl font-bold text-gray-900">Bem-vindo!</h2>
            <p className="text-gray-500 mt-2">Faça login para continuar</p>
            <div className="mt-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Usuário"
                    className="w-full px-4 py-2 mb-4 border rounded-lg text-gray-900"
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="idade"
                    className="w-full px-4 py-2 mb-4 border rounded-lg text-gray-900"
                    min={1}
                    required
                />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition active:scale-95 shadow-lg shadow-blue-200">
                    Entrar
                </button>
            </div>
        </form>
    </div>
    )
    
       
        
    
}           
    
    
