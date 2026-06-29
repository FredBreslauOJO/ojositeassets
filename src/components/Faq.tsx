"use client";
import { useState } from "react";

const faqData = [
  { question: "Preciso de cartão de crédito para testar?", answer: "Não! O plano Free é totalmente gratuito. Você já pode criar seu primeiro setlist e testar na mesma hora." },
  { question: "O que é o Modo Performance?", answer: "É a nossa tela escura e otimizada para o palco. Sem distrações, foca apenas nas letras e no timecode." },
  { question: "Funciona sem internet no palco?", answer: "Sim. Usando os recursos offline, você pode baixar o setlist antes do show e usar sem se preocupar com a rede do local." },
  { question: "Posso cancelar quando quiser?", answer: "Sim. Sem burocracia, cancele com um clique no painel." }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white border-b-8 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center">
          Dúvidas?
        </h2>
        
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-8 text-left flex justify-between items-center hover:bg-yellow-400 focus:outline-none transition-colors"
              >
                <span className="font-black text-2xl uppercase tracking-tight pr-4">
                  {faq.question}
                </span>
                <span className="text-4xl font-black shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-6 border-t-4 border-black bg-gray-50 text-xl font-bold text-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}