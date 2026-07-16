import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faPinterest, faDiscord } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
<>
  <hr className="text-[#0d0d0d] m-auto bg-[#f1f5f8]"/>
  <div className="pt-2 pl-8 pr-8">
    <footer className="min-[320px]:max-[604px]:flex min-[320px]:max-[604px]:flex-col min-[320px]:max-[604px]:items-center bg-white lg:flex lg:justify-between">
      <a href="/home" className="font-semibold text-[2rem] text-[#1a1a3a] no-underline max-lg:mb-6">
        Coding <span className="text-blue-500">Addict</span>
      </a>
      <nav className="flex m-0  p-0 text-[3.5rem]">
        <ul className="flex flex-col items-center justify-center text-[1.1rem] gap-2 m-0 p-0 min-[604px]:max-lg:items-baseline min-[604px]:max-lg:justify-baseline lg:flex-row ">
          <div className='font-semibold text-xl mb-4 lg:hidden'>
            Socials
          </div>
          <li>
            <a href="https://www.youtube.com" target='_blank' className='min-[320px]:max-lg:flex min-[320px]:max-lg:flex-row min-[320px]:max-lg:items-center min-[320px]:max-lg:gap-2'>
              <FontAwesomeIcon icon={faYoutube} style={{color: "rgb(0,0,0)",}} />
              <div className='lg:hidden'>
                Youtube
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target='_blank' className='min-[320px]:max-lg:flex min-[320px]:max-lg:flex-row min-[320px]:max-lg:items-center min-[320px]:max-lg:gap-2'>
              <FontAwesomeIcon icon={faInstagram} style={{color: "rgb(0,0,0)",}} />
              <div className='lg:hidden'>
                Instagram
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com" target='_blank' className='min-[320px]:max-lg:flex min-[320px]:max-lg:flex-row min-[320px]:max-lg:items-center min-[320px]:max-lg:gap-2'>
              <FontAwesomeIcon icon={faPinterest} style={{color: "rgb(0,0,0)",}} />
              <div className='lg:hidden'>
                Pinterest
              </div>
            </a>
          </li>
          <li>
            <a href="https://discord.com" target='_blank' className='min-[320px]:max-lg:flex min-[320px]:max-lg:flex-row min-[320px]:max-lg:items-center min-[320px]:max-lg:gap-2'>
              <FontAwesomeIcon icon={faDiscord} style={{color: "rgb(0,0,0)",}} />
              <div className='lg:hidden'>
                Discord
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <p className="items-center pb-4 mt-5 text-[#1a1a3a] text-[0.8rem] md:text-[0.9rem]">&copy; 2026 My Portfolio. All rights reserved.</p>
    </footer>
    </div>
    </>
  )
}