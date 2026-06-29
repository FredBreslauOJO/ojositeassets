export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white border-b-8 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Assine o Pro
          </h2>
          <p className="text-black font-black tracking-widest uppercase text-xl">
            O valor de uma palheta por mês para salvar seu show.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* PLANO FREE */}
          <div className="card-brutal flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-black uppercase tracking-tight mb-2">Free</h3>
              <div className="text-5xl font-black mb-8">Grátis</div>
              <ul className="space-y-4 mb-8 font-bold text-lg text-black">
                <li className="flex items-center gap-3">✓ 1 Setlist</li>
                <li className="flex items-center gap-3">✓ 10 Músicas</li>
                <li className="flex items-center gap-3">✓ Modo Performance</li>
              </ul>
            </div>
            <a href="https://app.canta.pro" className="btn-brutal-outline text-center text-xl w-full">
              Testar Agora
            </a>
          </div>

          {/* PLANO PRO */}
          <div className="card-brutal flex flex-col justify-between bg-black text-white transform md:-translate-y-4 shadow-[12px_12px_0px_0px_rgba(255,204,0,1)]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-black uppercase tracking-widest py-2 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Profissional
            </div>
            <div>
              <h3 className="text-4xl font-black uppercase tracking-tight mb-2 text-yellow-400">Pro</h3>
              <div className="text-5xl font-black mb-8">
                R$ 7.99<span className="text-xl text-gray-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 font-bold text-lg text-white">
                <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Setlists Ilimitados</li>
                <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Músicas Ilimitadas</li>
                <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Compartilhamento c/ Banda</li>
                <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Auto-Play Inteligente</li>
              </ul>
            </div>
            <a href="https://app.canta.pro" className="btn-brutal text-center text-xl w-full !bg-yellow-400 !text-black hover:!bg-white">
              Assinar Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}