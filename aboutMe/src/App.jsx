import Tabs from "../components/Tabs"
import TypedBanner from "../components/TypedBanner"
// import Typewriter from "../components/Typewriter"
import Intro from "../components/Intro"
import beachBus from "../src/assets/beachBus.jpg";
import patternBorder from "../src/assets/patternBorder.jpg";

function App() {


  return (
    <>
    <Intro />
    <TypedBanner />
    <Tabs />
    <img className="w-full h-20 object-cover" src={patternBorder}/>
    <img className="w-full h-100 object-cover" src={beachBus}/>
    <img className="w-full h-20 object-cover" src={patternBorder}/>

    </>
  )
}

export default App
