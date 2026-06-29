"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPanel() {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  const [contatos, setContatos] = useState<any[]>([]);
  const [faq, setFaq] = useState<any[]>([]);
  const [abaAtiva, setAbaAtiva] = useState("contatos");

  // Função para buscar os dados no Supabase
  const carregarDados = async () => {
    const { data: dadosContatos } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
    if (dadosContatos) setContatos(dadosContatos);

    const { data: dadosFaq } = await supabase.from("faq").select("*").order("display_order", { ascending: true });
    if (dadosFaq) setFaq(dadosFaq);
  };

  useEffect(() => {
    if (autenticado) {
      carregarDados();
    }
  }, [autenticado]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === "canta2026") { // <-- Mude sua senha aqui
      setAutenticado(true);
    } else {
      alert("Senha Incorreta. Tá tentando invadir, bicho?");
    }
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="card-brutal max-w-md w-full flex flex-col gap-6 text-center">
          <h1 className="text-4xl font-black uppercase">Área Restrita</h1>
          <input 
            type="password" 
            placeholder="Digite a Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border-4 border-black p-4 text-xl text-center font-bold outline-none focus:border-yellow-400 transition-colors"
          />
          <button type="submit" className="btn-brutal text-xl">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b-8 border-black pb-6">
          <h1 className="text-5xl font-black uppercase tracking-tighter">Painel de Controle</h1>
          <button onClick={() => setAutenticado(false)} className="btn-brutal-outline">Sair</button>
        </div>

        {/* ABAS */}
        <div className="flex gap-4 mb-8 border-b-4 border-black pb-4">
          <button 
            onClick={() => setAbaAtiva("contatos")} 
            className={`font-black text-xl uppercase tracking-widest px-4 py-2 ${abaAtiva === "contatos" ? "bg-black text-white" : "hover:bg-yellow-400"}`}
          >
            Caixa de Entrada
          </button>
          <button 
            onClick={() => setAbaAtiva("faq")} 
            className={`font-black text-xl uppercase tracking-widest px-4 py-2 ${abaAtiva === "faq" ? "bg-black text-white" : "hover:bg-yellow-400"}`}
          >
            Editar FAQ
          </button>
        </div>

        {/* CONTEÚDO: CONTATOS */}
        {abaAtiva === "contatos" && (
          <div className="grid gap-6">
            {contatos.length === 0 ? (
              <p className="text-2xl font-bold text-gray-400">Nenhuma mensagem recebida ainda.</p>
            ) : (
              contatos.map(contato => (
                <div key={contato.id} className="card-brutal">
                  <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-2">
                    <div>
                      <h2 className="text-2xl font-black uppercase">{contato.name}</h2>
                      <p className="font-bold text-gray-600">{contato.email}</p>
                    </div>
                    <span className="bg-yellow-400 text-black px-3 py-1 font-black text-xs uppercase border-2 border-black">
                      {contato.status}
                    </span>
                  </div>
                  <p className="text-xl font-bold whitespace-pre-wrap">{contato.message}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* CONTEÚDO: FAQ */}
        {abaAtiva === "faq" && (
          <div className="grid gap-6">
            {faq.map(item => (
              <div key={item.id} className="card-brutal">
                <h2 className="text-2xl font-black uppercase mb-2">{item.question}</h2>
                <p className="text-lg font-bold text-gray-700">{item.answer}</p>
                {/* O botão de editar colocaremos na próxima etapa! */}
                <button className="mt-4 font-black uppercase text-sm border-b-2 border-black hover:text-yellow-500 hover:border-yellow-500">
                  Editar (Em breve)
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}