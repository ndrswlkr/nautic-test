import logo from './logo.svg'
import styles from './App.module.css'
import ContentModal from './ContentModal'
import ScrolldrivenAnimation from './ScrolldrivenAnimation'
import PopoverDemo from './PopoverDemo'
import WakeLock from './WakeLock'
import '@picocss/pico'
import GeoLocation from './GeoLocation'

function App () {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
      
        <WakeLock />
        <ContentModal />
        <PopoverDemo />
        <GeoLocation />
      </header>
      <ScrolldrivenAnimation />
    </div>
  )
}

export default App
