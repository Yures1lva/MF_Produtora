import {Nav} from "./components/nav/Nav"
import './App.module.css'
import styles from './App.module.css'
import { TopContent } from "./components/top-content/TopContent"
import {Results} from './components/results/Results'

function App() {

  return (
    <>
      <Nav/>
      <TopContent/>

      <div className={styles.divider}></div>
      
      <Results/>


    </>
  )
}

export default App
