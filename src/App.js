import { Gallery } from "react-grid-gallery";
import "./App.css";

const images = [
  {
    src: "https://www.leparisien.fr/resizer/PHyqJATAgsb8RhVibTXze_-WpQk=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/JUFANRZZY4WYOPTT43ZHXEKZUQ.jpg",
    width: "auto",
    height: 700,
    caption: "price",
  },
  {
    src: "https://media.ouest-france.fr/v1/pictures/MjAyMjEyMDczOTY5YjZkMzdjYTFhYTA1ZjkyOGZkMjA4ZTJjNTQ?width=480&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=b7844b3f89b909baf184bb219f615b7690de5280471bb7cfac149347a9e1d5d5",
    width: "auto",
    height: 700,
    tags: [
      { value: "$", title: "$" },
      { value: "€", title: "€" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://static.latribune.fr/600650/un-arsenal-d-armes-a-feu-pistolets-munitions-fusils-pose-sur-une-table-a-manchester.jpg",
    width: "auto",
    height: 700,
  },
  {
    src: "https://images.lanouvellerepublique.fr/image/upload/t_1020w/61e15428d75fb6b6548b45ac.jpg",
    width: "auto",
    height: 700,
  },

  {
    src: "https://www.fedpol.admin.ch/dam/fedpol/fr/images/sicherheit/waffen/verboten/seriefeuerwaffen-geaenderet.jpg",
    width: "auto",
    height: 700,
    tags: [
      { value: "kalachnikov", title: "kalachnikov" },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>FAKE WEBSITE WEAPONS</p>
        <p className="w">
          This is a fake gun sales site designed for the development of a
          machine learning tool for web servers, photo, symbol and keyword
          detection for hosting companies.
        </p>
      </header>
      <h4>Pictures</h4>

      <Gallery images={images} />

      <h4>Keywords</h4>

      <p>all types</p>
      <p>kalachnikov</p>
      <p>9 mm</p>
      <p>caliber</p>
      <p>fusil</p>
      <p>delivery</p>
      <p>contact</p>
      <p>€</p>
      <p>$</p>
      <p>OTHERS ...</p>

      <p>Hosts vercel.com</p>
      <p>contact boschat@protonmail.com</p>
    </div>
  );
}

export default App;
