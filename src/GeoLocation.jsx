import {
  For,
  createEffect,
  createMemo,
  createSignal,
  on,
  onCleanup
} from 'solid-js'
import haversineDistance from 'haversine-distance'

function GeoLocation () {
  const [location, setLocation] = createSignal({ message: 'not started yet' })
  const [route, setRoute] = createSignal([])
  const [distance, setDistance] = createSignal(0)
  let watchId = null

  function success (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(position.coords)
    setRoute([...route(), { latitude, longitude }])
    //setLocation(`${latitude} - ${longitude}`)
    setLocation({ message: 'got location', ...position.toJSON() })
    console.log({ ...position.coords }, 'yes')
    /*  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`; */
  }

  function error () {
    setLocation({ message: 'Unable to retrieve your location' })
  }

  function getLoc () {
    const geolocOptions = {
      enableHighAccuracy: true,
      maximumAge: 2000
    }
    if (!navigator.geolocation) {
      setLocation({ message: 'Geolocation is not supported by your browser' })
    } else {
      setLocation({ message: 'Locating…' })
      watchId = navigator.geolocation.watchPosition(success, error, geolocOptions)
    }
  }

  function sumDistance (route) {
    if (route.length < 2) return 
    setDistance(0)
    for (let i = 0; i < route.length - 1; i++) {
      let a = route[i]
      let b = route[i + 1]
      let d = haversineDistance(a, b)
      setDistance(distance() + d)
    }
  }
  createEffect(
    on(
      () => route(),
      () =>  sumDistance(route())
    )
  )
  onCleanup(() => navigator.geolocation.clearWatch(watchId))
  return (
    <article>
      <h2>GeoLocation</h2>
      <button onclick={() => getLoc()}>get Location</button>
      <code>{location().message}</code>
      <code>{location()?.timestamp}</code>
      <code>distance: {(distance()/1000).toFixed(2)}</code>
      <For each={route()}>
        {loc => (
          <p>
            {loc.latitude} {loc.longitude}
          </p>
        )}
      </For>
      {/* <For each={Object.keys(location()?.coords || {})}>
              { k => (
                <p>{k} {location().coords[k] || 0}</p>
              )} 
            </For>
              */}
    </article>
  )
}
export default GeoLocation
