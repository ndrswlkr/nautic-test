import { createSignal } from "solid-js";

 function GeoLocation() {
    const [location, setLocation] = createSignal("location not requested jet")
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation(`${latitude} - ${longitude}`)
       /*  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`; */
      }
    
      function error() {
        setLocation( "Unable to retrieve your location")
      }
    
      function getLoc() {
      if (!navigator.geolocation) {
        setLocation("Geolocation is not supported by your browser")
      } else {
       setLocation("Locating…")
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }
    return (
        <article>
            <h2>GeoLocation</h2>
            <button onclick={()=>getLoc()}>get Location</button>
            <code>{location()}</code>
        </article>
    );
}
    export default GeoLocation;