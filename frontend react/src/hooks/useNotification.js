import { useEffect, useState } from "react";

export default function useNotification() {
  
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });

  const showNotification = (message, type = 'success', duration= 3000) => {
    setNotification({ message, type, visible: true });

    setTimeout(() => {
      setNotification({ message: '', type: '', visible: false });
    }, 5350);
  };
  
  return { notification, showNotification };
}