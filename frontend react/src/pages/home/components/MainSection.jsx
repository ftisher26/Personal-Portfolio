import dogimg from '../../../assets/images/perrito.jpg'
import coche from '../../../assets/images/car.webp'



const cardsSkills = [
  {
    title: "Web Development",
    description: "I create responsive and also user-friendly websites using all the latest technologies with the frameworks too.",
    image: dogimg, // At the hour of import a varible with the img, it should be used as a no-string, because if i use strings it will not be possible to show the img
  },
  {
    title: "Web & UX/UI Design",
    description: "I build a website with a clear and simple design for a good user experience.",
    image: coche,
  },
  {
    title: "Backend Development",
    description: "I create a backend for your website with everything that you need to make work all the functions of your website, with a database and server-side.",
    image: "",
  }
]

export default function MainSection() {
  return (
    <div className="py-10 px-6">
      <main className="flex flex-col flex-1 w-full overflow-hidden gap-y-12 max-w-7xl mx-auto">
        <section className="bg-[#edf2f7] px-[5%] py-16">
          <div className="max-w-6xl mx-auto size-fit">
            <div className="flex justify-center items-center">
              <h1 className="text-black text-4xl font-courier">
                <span className="relative no-underline after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-500">
                  WHAT I DO
                </span>
              </h1>
            </div>
            {/* CARDS */}
            <div className="grid grid-cols-1 gap-8 mt-8 mx-auto md:grid-cols-3">
              {cardsSkills.map(({ title, description, image }) => (
                <div 
                  key={title}
                  className={`flex-1 bg-white border-2 border-gray-300 rounded-md p-4`}
                >
                  <div className="w-full max-w-275 h-42 overflow-hidden relative rounded-md isolate">
                    <img src={image} alt={title} className="object-cover object-center size-full max-w-full" />
                  </div>
                  <div className="">
                    <h2 className="text-xl font-black mb-2 underline md:text-2xl">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                  </div>
                </div>
              ))}    
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}