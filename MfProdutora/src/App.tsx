import {Nav} from "./components/nav/Nav"
import './App.module.css'
// import styles from './App.module.css'
import { TopContent } from "./components/top-content/TopContent"
import {Results} from './components/results/Results'
import {Services} from './components/servicesPage/Services'

function App() {

  return (
    <>
      <Nav/>
      <TopContent/>      
      <Results/>
      <Services/>
    </>
  )
}

export default App
