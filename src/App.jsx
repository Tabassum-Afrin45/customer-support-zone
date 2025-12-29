import ProgressTask from "./components/Banner"
import Navbar from "./components/Navbar"

const App=()=>{
  return <div>
    <header className="w-11/12 mx-auto my-3">
      <Navbar></Navbar>
    </header>
    <div className="bg-gray-100 h-125">
      <section className="w-11/12 mx-auto py-12">
         <ProgressTask></ProgressTask>
      </section>
    </div>
  </div>   
}
export default App
