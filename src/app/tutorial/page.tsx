export default function Tutorial() {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Como Usar
          </h1>
          <p className="text-black font-black tracking-widest uppercase text-xl">
            Domine o Canta.Pro em 3 minutos.
          </p>
        </div>

        {/* Vídeo do Tutorial (Placeholder do YouTube/Vimeo) */}
        <div className="card-brutal p-2 md:p-4 mb-12 bg-black">
          <div className="aspect-video bg-zinc-800 w-full relative flex items-center justify-center border-4 border-yellow-400">
            <span className="text-yellow-400 font-black uppercase tracking-widest">
              [ Insira o link do seu vídeo aqui ]
            </span>
            {/* Exemplo de Iframe: */}
            {/* <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/SEU_VIDEO_ID" title="Tutorial Canta.Pro" allowFullScreen></iframe> */}
          </div>
        </div>

        <div className="space-y-8">
          <div className="border-l-8 border-yellow-400 pl-6">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">1. Crie seu Setlist</h2>
            <p className="text-lg font-bold text-gray-700">Adicione as músicas na ordem do show. Você pode reordenar arrastando e soltando antes de subir ao palco.</p>
          </div>
          <div className="border-l-8 border-black pl-6">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">2. Ajuste o Timecode</h2>
            <p className="text-lg font-bold text-gray-700">Defina o tempo exato de cada música. O Auto-Play vai usar isso para rolar a letra perfeitamente no ritmo da banda.</p>
          </div>
          <div className="border-l-8 border-yellow-400 pl-6">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">3. Modo Performance</h2>
            <p className="text-lg font-bold text-gray-700">Na hora do show, ative o Modo Performance. Tela escura, foco total e zero distrações.</p>
          </div>
        </div>
      </div>
    </div>
  );
}