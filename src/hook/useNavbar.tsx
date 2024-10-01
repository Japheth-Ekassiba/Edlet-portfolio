import { useState, useEffect } from "react"

const useNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    if(window.scrollY>100){
      setShowNavbar(true);
    }
    else{
      setShowNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbar);
    // Clean Up
    return () => window.removeEventListener("scroll", toggleNavbar);
  },[])
  return {showNavbar}
}

export default useNavbar