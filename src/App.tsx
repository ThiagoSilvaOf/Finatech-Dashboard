import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Resumo from "./Pages/Resumo";
import "./Style.css";

function App() {
  return (
    <div>
      <SideNav />
      <main>
        <Header />
      </main>
      <Resumo />
    </div>
  );
}

export default App;
