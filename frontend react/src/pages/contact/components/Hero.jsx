export default function Hero() {
  return (
    <section className="flex w-full h-[70vh] relative overflow-hidden text-[#f5f5f5] p-[0 20px]">
      <h1 className="animate-fade-up inline-flex flex-col justify-center items-center text-center text-shadow-lg/50 color-[#f5f5f5] relative h-auto w-full z-1 font-courier font-bold text-[1.6rem] leading-6 tracking-[1px] min-[320px]:max-[374px]:text-[1.4rem] sm:text-[3rem] sm:leading-9">
        <span className="block">Hello.</span>
        Let's work together<br/>
        on your next project.
      </h1>

      <div className="contents justify-center items-center w-full h-[70vh] bg-transparent relative shrink-0 z-0">
        <video className="absolute top-0 left-0 size-full object-cover aspect-video z-0"
        autoPlay muted loop playsInline preload="metadata" poster="/Miniatura.png"
        >
          <source src="/Raini.mp4" alt="Lluvia y gato" type="video/mp4"/>
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </section>
  )
}