import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  const enlaces = ["Inicio", "Acerca de", "Servicios", "Contacto"];

  const greeting = "Bienvenidos sean todos";
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={greeting} />
    </>
  );
}

export default App;
