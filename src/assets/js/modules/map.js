let map;

async function initMap() {
  if (!window.google) return

  const { Map } = await window.google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();