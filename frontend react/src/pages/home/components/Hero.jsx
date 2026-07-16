import coche from '../../../assets/images/car.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase, faLocationDot, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <>
      <section className="bg-white min-h-85 flex flex-col justify-between px-[5%] py-16 gap-8 md:flex-row md:justify-around">
        <div className="max-w-140 size-fit">
            <h1 className="text-black text-5xl font-courier size-fit">
              <span className="relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-blue-500 ">
                HI THERE!
              </span>   
            </h1>
            <h2 className="text-black text-4xl font-courier size-fit mt-5">I'm Thiago Padularrosa</h2>
            <h3 className="flex justify-center w-55 text-white text-3xl font-courier bg-gray-600 mt-5 md:w-100">Full Stack Developer</h3>
            <p className="text-black text-base whitespace-pre-line mt-10 md:w-96">
              I build responsive websites with great details
              and attractiveness for businesses.
            </p>

            <div className="flex flex-col items-left mt-8 md:flex-row md:gap-6 md:items-center">
              <p className="heroAddressAndDisponibility size-fit">
                <FontAwesomeIcon icon={faLocationDot} size='1x' className='size-fit mr-2'></FontAwesomeIcon>
                Based in Argentina
              </p>
              <p className="heroAddressAndDisponibility size-fit">
                <FontAwesomeIcon icon={faLaptopCode} size='1x' className='size-fit mr-2'></FontAwesomeIcon>
                Available for Work
              </p>
            </div>

            <div className="flex flex-col size-fit self-center md:flex-row md:gap-10">
              <button className="text-white rounded-xl cursor-pointer bg-[#2d3748] px-14.5 py-3.5 mt-10">
                HIRE ME
              </button>
              <button className="text-white rounded-xl cursor-pointer bg-[#2d3748] px-8 py-3.5 mt-8  md:mt-10">
                VIEW MY WORK
              </button>  
            </div>
        </div>
        <div className="relative shrink-0 w-70 max-w-100 h-full">
          <img src={coche} alt="" fetchPriority='high' className="block w-full object-cover" />
        </div>
      </section>
    </>
  )
}