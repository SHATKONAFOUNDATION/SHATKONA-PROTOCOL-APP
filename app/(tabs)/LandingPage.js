
const LandingPage = ({ onEnterSanctum }) => {
  return (
    <div className="bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      
      {/* 1. THE HERO (Sovereign Entrance) */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-zinc-900 to-black">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-2">SHATVAYU</h1>
        <p className="text-gold-500 tracking-[0.4em] uppercase text-xs md:text-sm mb-12">Architecting Human Sovereignty</p>
        
        <div className="flex flex-col gap-6">
          <button 
            onClick={() => window.open('https://buy.stripe.com/your_link', '_blank')}
            className="px-12 py-5 bg-gold-600 text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition-all"
          >
            Join the Protocol — $497
          </button>
          <button 
            onClick={onEnterSanctum}
            className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase hover:text-gold-400 transition-colors"
          >
            [ Access the Sanctum / Member Login ]
          </button>
        </div>
      </section>

      {/* 2. THE SILENT EPIDEMIC & BIO */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 border-t border-zinc-900">
        <div>
          <h2 className="text-gold-500 text-xs tracking-widest uppercase mb-4">The Silent Epidemic</h2>
          <p className="text-2xl font-light leading-relaxed italic text-zinc-300">
            "Modern posture is a slow-motion structural collapse. Snayulogy™ is the forensic science of reclaiming your fascial matrix."
          </p>
        </div>
        <div className="text-zinc-400 text-sm leading-loose">
          <h2 className="text-white text-xs tracking-widest uppercase mb-4">The Architect (Bio)</h2>
          <p>Founded by the Architect of the Shatvayu method, this protocol is the culmination of decades spent decoding human bio-mechanics and neural integration.</p>
        </div>
      </section>

      {/* 3. THE SOVEREIGN ARCHITECT BOOK TRAILER */}
      <section className="py-20 bg-zinc-950 px-6">
        <div className="max-w-5xl mx-auto border border-zinc-800 p-2">
          <div className="aspect-video bg-zinc-900 flex items-center justify-center relative group">
            <span className="text-gold-500 uppercase tracking-widest text-[10px]">Play: The Sovereign Architect Book Trailer</span>
            {/* Replace with your video embed */}
          </div>
        </div>
      </section>

      {/* 4. THE 6 PILLAR PROTOCOL (Shatkona Protocol™) */}
      <section className="py-24 px-6">
        <h2 className="text-center text-3xl uppercase tracking-tighter mb-16 font-bold">The Shatkona Protocol™ Brief</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-zinc-900 border border-zinc-900">
          {[
            { id: 'A', name: 'Prana Pulse', desc: 'Neural Ignition' },
            { id: 'B', name: 'Myofascial Liberation', desc: 'Tissue Melt' },
            { id: 'C', name: 'Structural Flow', desc: 'Dynamic Alignment' },
            { id: 'D', name: 'Forensic Load', desc: 'Functional Strength' },
            { id: 'E', name: 'Neural Integration', desc: 'Chakra Alignment' },
            { id: 'F', name: 'Sovereign Recovery', desc: 'The Vow' }
          ].map((pillar) => (
            <div key={pillar.id} className="bg-black p-12 hover:bg-zinc-950 transition-all cursor-crosshair">
              <span className="text-gold-600 font-mono text-[10px] mb-2 block">SECTOR 0{pillar.id}</span>
              <h4 className="text-white text-lg font-bold uppercase tracking-tight">{pillar.name}</h4>
              <p className="text-zinc-600 text-xs mt-2 italic">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FASCIAMAX™ CLINICS & CORPORATE MENTORSHIP */}
      <section className="py-24 bg-white text-black px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tighter">FasciaMax™ Clinics</h2>
            <p className="font-light text-zinc-600 mb-8">Structural recalibration in controlled clinical environments.</p>
            <div className="h-96 bg-zinc-200"></div> {/* Image Placeholder */}
          </div>
          <div className="flex flex-col justify-end">
            <h2 className="text-4xl font-black uppercase mb-6 tracking-tighter">Corporate Mentorship</h2>
            <p className="font-light text-zinc-600 mb-8">Architecting elite performance for the Sovereign Enterprise.</p>
            <div className="h-64 bg-zinc-300"></div> {/* Image Placeholder */}
          </div>
        </div>
      </section>

      {/* 6. OUR TOOLS: FASCIAMAX™ LOTION */}
      <section className="py-24 px-6 border-t border-zinc-900 text-center">
        <h2 className="text-gold-500 uppercase tracking-widest text-xs mb-8">Forensic Instruments</h2>
        <h3 className="text-4xl font-bold mb-12">The FasciaMax™ Conduction Lotion</h3>
        <div className="max-w-md mx-auto aspect-[3/4] bg-zinc-900 border border-zinc-800 flex items-center justify-center">
           <span className="text-zinc-700 uppercase tracking-[0.5em] text-[10px]">Product Visualization</span>
        </div>
      </section>

      {/* 7. TESTIMONIALS & EVIDENCE (The Live Feed) */}
      <section className="py-24 px-6 bg-zinc-950">
        <h2 className="text-center text-xs tracking-widest text-gold-500 uppercase mb-16">Forensic Evidence (Patient Reviews)</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 border border-zinc-800 bg-black italic font-light text-zinc-400">
            "The Shatvayu reset didn't just fix my back; it restructured how I move through the world."
            <span className="block mt-4 text-white text-xs non-italic font-bold">— CEO, Global Tech Firm</span>
          </div>
          <div className="p-8 border border-zinc-800 bg-black italic font-light text-zinc-400">
            "Sovereign body, sovereign mind. The protocol is the missing link in modern health."
            <span className="block mt-4 text-white text-xs non-italic font-bold">— Elite Athlete</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-900 text-center text-[10px] tracking-widest uppercase text-zinc-600">
        © 2026 Shatvayu Global Portal | Designed for Human Sovereignty
      </footer>

    </div>
  );
};

export default LandingPage;