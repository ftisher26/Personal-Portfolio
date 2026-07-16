import Cards from './Cards'
import ExpSection from './ExpSection';

export default function SkillsCards() {

  const cardsData = [
    {
      id: 1,
      category: 'Frontend',
      skills: ["HTML5", "CSS", "JavaScript", "React"]
    },
    {
      id: 2,
      category: 'Backend',
      skills: ["Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      category: 'Additional',
      skills: ["Git", "SQL"]
    }
  ];

  return (
    <>
      <main className='py-8 px-4 bg-[#edf2f7]'>
        <section className="flex flex-col justify-baseline items-center gap-8 md:flex-row md:ml-20">
          <div className="min-h-65">
            <div className="flex flex-col">

              {/* TITLE */}
              <div className="flex size-fit mb-8">
                <h2 className="font-semibold text-courier text-2xl underline underline-offset-8 md:text-3xl">
                  Skills & Technologies
                </h2>
              </div>

              {/* CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-14 max-w-275 mx-auto">
                {cardsData.map((item) => (
                  <Cards
                    key={item.id}
                    title={item.category} 
                    skills={item.skills}    
                  />
                ))} 
              </div>
            </div>
          </div>
        </section>
        
        {/* SECTION TO SHOW EXPERIENCES */}
        <ExpSection />
      </main>
    </>
  )
}