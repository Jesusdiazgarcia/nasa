import { useEffect, useState } from "react";
import { CiCircleChevUp } from "react-icons/ci";



export default function Scroll() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > 200) {
        setShowButton(true);
      }
      else setShowButton(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div >
      {showButton && (
        <button className="fixed bottom-4 right-4   z-50 bg-transparent text-text-color font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform animate-bounce" onClick={() => window.scrollTo(0, 0)}>
          <CiCircleChevUp className="w-12 h-12" />
        </button>

      )}
    </div>

  )


}

