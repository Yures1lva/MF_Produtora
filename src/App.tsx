import {Nav} from "./components/nav/Nav"
// import styles from './App.module.css'
import { TopContent } from "./components/top-content/TopContent"
import {Results} from './components/results/Results'
import {Services} from './components/servicesPage/Services'
import { Feedback } from "./components/feedback/Feedback"
import { Team } from "./components/team/Team"
import { Contact } from "./components/contact/Contact"
import {Footer}  from "./components/footer/Footer"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <TopContent/>      
      <Results/>
      <Services/>
      <Feedback/>
      <Team/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
