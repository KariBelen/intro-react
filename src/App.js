import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componentes/Header";
import CardComponent from "./componentes/CardComponent";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="App">
      <Header titulo="Galeria de Imágenes con React" />
      <CardComponent
        img="https://images.pexels.com/photos/12861655/pexels-photo-12861655.jpeg"
        titulo="Cafe"
        descripcion="Cafe de media mañana"
      />
      <CardComponent
        img="https://images.pexels.com/photos/9282148/pexels-photo-9282148.jpeg"
        titulo="Valencia"
        descripcion="La ruta del Peñon de Ifach"
      />
      <CardComponent
        img="https://images.pexels.com/photos/11843489/pexels-photo-11843489.jpeg"
        titulo="Faro"
        descripcion="Faro de Biarritz"
      />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
