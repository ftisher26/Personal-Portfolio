import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export default function useDocumentTitle() {
  const location = useLocation();

  const titleMap = {
    '/home': 'Home | Coding Addict',
    '/about': 'About | Coding Addict',
    '/projects': 'Projects | Coding Addict',
    '/contact': 'Contact | Coding Addict'
  };

  useEffect(() => {
    const currentTitle = titleMap[location.pathname] || 'Coding Addict';
    document.title = currentTitle;
  }, [location]);
};