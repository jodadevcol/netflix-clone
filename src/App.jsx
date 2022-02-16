/* Components */
import Header from "@components/Header"
import Footer from "@components/Footer"
/* Styles & Sources */
import "./App.css"
import Sections from "@components/Sections"

function App() {
  return (
    <div className="App-Container">
      <main>
        <Header />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}

export default App
