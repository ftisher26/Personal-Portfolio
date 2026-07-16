export default function Cards({ title, skills }) {
  return (
    <>
      <div className="bg-[#202020] w-2xs h-37 border-2 rounded-2xl border-blue-700 ">
        <h3 className="text-lg text-white font-bold size-fit mt-2 ml-5">{title}</h3>
        <div className="flex flex-wrap gap-x-2 gap-y-3 mt-5 ml-5">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-1 text-xs font-semibold lowercase bg-transparent text-white border-2 border-blue-500 rounded-full tracking-wider" 
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}