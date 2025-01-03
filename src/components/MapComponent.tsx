import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
  useEffect(() => {
    async function loadLeaflet() {
      if (typeof window !== "undefined") {
        const L = await import("leaflet");

        const map = L.map("map", {
          center: [44.24541, 17.96368],
          zoom: 11,
          minZoom: 10,
          maxBounds: [
            [43.907629, 17.272634],
            [44.552763, 18.600762],
          ],
          maxBoundsViscosity: 1.0,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        L.marker([44.24541, 17.96368])
          .addTo(map)
          .bindPopup("Izletište Smetovi")
          .openPopup();
      }
    }

    loadLeaflet();
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "100vh",
        width: "100vw",
        marginTop: "1em",
      }}
    />
  );
}
