export default function Contato() {
  return (
    <div className="min-h-screen bg-yellow-400 py-24 px-6 border-b-8 border-black">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
            Fale Conosco
          </h1>
          <p className="text-black font-black tracking-widest uppercase text-xl">
            Dúvidas, parcerias ou suporte? Mande a real.
          </p>
        </div>

        <form className="card-brutal bg-white flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-black uppercase tracking-widest text-sm">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Digite seu nome" 
              className="border-4 border-black p-4 text-lg font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-none"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-black uppercase tracking-widest text-sm">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="border-4 border-black p-4 text-lg font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-black uppercase tracking-widest text-sm">Mensagem</label>
            <textarea 
              rows={5}
              placeholder="Como podemos te ajudar a não dar branco no palco?" 
              className="border-4 border-black p-4 text-lg font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-none resize-none"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-brutal text-xl mt-4">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}