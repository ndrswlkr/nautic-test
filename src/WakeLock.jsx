import { createSignal, onMount } from 'solid-js'

function WakeLock () {
  const [lockStatus, setLockStatus] = createSignal('wake lock pending')
  const getWakeLock = async () => {
    // Create a reference for the Wake Lock.
    let wakeLock = null

    // create an async function to request a wake lock
    try {
      wakeLock = await navigator.wakeLock.request('screen')
      setLockStatus('Wake Lock is active!')
    } catch (err) {
      // The Wake Lock request has failed - usually system related, such as battery.
      setLockStatus(`${err.name}, ${err.message}`)
    }
  }

  return (
    <article>
      <h2>WakeLock</h2>
      <code>{lockStatus()}</code>
      <button onclick={async()=>{
    await getWakeLock()
  }}>request Wakelock</button>
    </article>
  )
}
export default WakeLock
