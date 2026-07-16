import ExpCards from './ExpCards' 

export default function ExperienceSection() {

  const cardsExp = [
    { id: 1, 
      title: 'Developer', 
      subtitles: ['CO. Country/Province/State'], 
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.' 
    },
    { id: 2, 
      title: 'Developer', 
      subtitles: ['CO. Country/Province/State'], 
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.' 
    },
  ];

  return (
    <>
      <section className="flex flex-col justify-baseline items-center gap-8 md:flex-row md:ml-20">
        <div className="min-h-85 mt-8">
          
          {/* TITLE */}
          <div className="flex size-fit mb-8">
            <h3 className="font-semibold text-courier text-2xl underline underline-offset-8 md:text-3xl">
              Experience
            </h3>
          </div>

          <div className="flex flex-col md:flex-row">  
            <div className="flex flex-col items-center justify-around mr-6 w-full">  

              {/* CIRCLE N1 */}
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                <p className='font-bold'>2026</p>
              </div>

              {/* CONNECTOR LINE */}
              <div className="w-33.5 h-0.5 bg-blue-300 shrink-0 rotate-90"></div>

              {/* CIRCLE N2 */}
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                <p className='font-bold'>2025</p>
              </div>

            </div>

            {/* CARDS */}
            <div className="grid w-full gap-10 mx-auto">
              {cardsExp.map((item) => (
                <ExpCards
                  key={item.id}
                  title={item.title}
                  subtitles={item.subtitles}
                  description={item.description}
                />
              ))}
            </div>
          </div> 
        </div>
      </section>
    </>
  )
}