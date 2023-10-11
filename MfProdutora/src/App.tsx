import {Nav} from "./components/nav/Nav"
// import styles from './App.module.css'
import { TopContent } from "./components/top-content/TopContent"
import {Results} from './components/results/Results'
import {Services} from './components/servicesPage/Services'
import { Feedback } from "./components/feedback/Feedback"

function App() {

  return (
    <>
      <Nav/>
      <TopContent/>      
      <Results/>
      <Services/>
      {/*<Feedback/>*/}
    </>
  )
}

export default App
