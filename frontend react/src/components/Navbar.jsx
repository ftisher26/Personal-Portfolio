import { Link } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSketch, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Home', to: '/home', title: 'Home'},
  { label: 'About', to: '/about', title: 'About'}, 
  { label: 'Portfolio', to: '/projects', title: 'Projects'}, 
  { label: 'Contact', to: '/contact', title: 'Contact'},
]

const socials = [
  { label: <FontAwesomeIcon icon={faFacebookF}/>,  href: 'https://facebook.com', target: '_blank', className: 'bg-[#1877f2]', title: 'Facebook' },
  { label: <FontAwesomeIcon icon={faXTwitter}/>,  href: 'https://x.com', target: '_blank', className: 'bg-black', title: 'X' },
  { label: 'Bē', href: 'https://behance.net', target: '_blank', className: 'bg-[#1769ff]', title: 'Behance' },
  { label: 'in', href: 'https://linkedin.com', target: '_blank', className: 'bg-[#0a66c2]', title: 'LinkedIn' },
  { label: <FontAwesomeIcon icon={faSketch}/>,  href: 'https://sketch.com', target: '_blank', className: 'bg-[#4a9eff]', title: 'Sketch' },
]

export default function Navbar() {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const menuRef = useRef(null);
const buttonRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      !buttonRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

document.addEventListener('mousedown', handleClickOutside);

return () => {
  document.removeEventListener('mousedown', handleClickOutside);
};
}, []);

  return (  
    <nav className="bg-white h-17.5 flex items-center justify-between px-[5%] sticky top-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      
      {/* Logo */}
      <a href="/home" className="font-semibold text-[1.4rem] text-[#1a1a2e] no-underline">
        Coding <span className="text-blue-500">Addict</span>
      </a>

      {/* Nav links Medium and Wider Screens*/}
      <ul className="hidden lg:flex space-x-6 gap-9 list-none">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              to={link.to}
              className="no-underline text-[#2d3748] font-medium text-[0.95rem] transition-colors hover:text-[#4a9eff]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex gap-3 items-center">
        {socials.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target={s.target}
            title={s.title}
            className={`${s.className} text-white w-8 h-8 flex items-center justify-center rounded-full text-[0.8rem] font-bold no-underline transition-transform hover:scale-110 hover:opacity-85`}
          >
            {s.label}
          </a>
        ))}
      </div>
      <div className="lg:hidden">
        <button 
          onClick={toggleMenu}
          className="lg:hidden nav-toggle" 
          aria-label='Toggle Menu'
          ref={buttonRef}
        >
          <FontAwesomeIcon 
          icon={isOpen ? faXmark : faBars} 
          style={{color: "rgb(0, 174, 255)",}}
          className='inline-block! outline-none! origin-center will-change-transform p-0'
          />
        </button>

        {/* Mobile Menu Responsive */}
        <ul className={`
        lg:hidden bg-white absolute top-full left-0 w-full flex flex-col items-left space-y-4 py-6 pl-10 transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
        ref={menuRef}>
          <li><a href="/home" onClick={toggleMenu} className='hover:text-blue-400 block text-lg'>Home</a></li>
          <li><a href="/about" onClick={toggleMenu} className='hover:text-blue-400 block text-lg'>About</a></li>
          <li><a href="/projects" onClick={toggleMenu} className='hover:text-blue-400 block text-lg'>Portfolio</a></li>
          <li><a href="/contact" onClick={toggleMenu} className='hover:text-blue-400 block text-lg'>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
