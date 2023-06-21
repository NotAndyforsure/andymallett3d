import {Suspense, useState} from "react"
import Spline from "@splinetool/react-spline"

function App() {
  const url_of_pages = {
    home: "https://prod.spline.design/xQu6P7hrO-L7JyY5/scene.splinecode",
    about: "https://prod.spline.design/TeqyuFy9tZaqlIrG/scene.splinecode",
    contact: "https://prod.spline.design/HjwLSO7iPUJ54If7/scene.splinecode",
  }

  const [currentUrl, setCurrentUrl] = useState(url_of_pages.home)

  const onMouseDown = (e) => {
    console.log(e.target.name)
    switch (e.target.name) {
      case "about nav":
        setCurrentUrl(url_of_pages.about)
        break
      case "contact nav":
        setCurrentUrl(url_of_pages.contact)
        break
      case "home nav":
        setCurrentUrl(url_of_pages.home)
        break
      case "upwork nav":
        window.location.href = "https://www.upwork.com/freelancers/~01693b52ecbcedc9d9"
        break
      case "github nav":
        window.location.href = "https://github.com/NotAndyforsure"
        break
      case "gmail nav":
        window.location.href = "mailto:agcmall05@gmail.com"
        break
    }
  }

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <Suspense
        fallback={
          <div style={{textAlign: "center"}}>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Spline scene={currentUrl} onMouseDown={onMouseDown} />
      </Suspense>
    </div>
  )
}

export default App
