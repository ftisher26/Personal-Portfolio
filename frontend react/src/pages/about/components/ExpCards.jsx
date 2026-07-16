export default function ExpCards({ title, subtitles, description }) {
  return (
      <div className="bg-[#202020] w-1xl h-70 border-2 rounded-2xl border-blue-700 md:w-212 md:h-40">
        <h3 className="text-lg text-white font-bold size-fit mt-2 ml-8">{title}</h3>
        <div className="flex flex-wrap size-fit gap-x-2 gap-y-3 mt-2 ml-8">
          {subtitles.map((subtitles, index) => (
              <span 
                className="text-lg font-medium lowercase bg-transparent text-blue-600 tracking-wider" 
              > 
                {subtitles}
              </span>
          ))}
        </div>
        <p className="text-base text-white size-fit mt-2 ml-8">{description}</p>
      </div>
  )
}