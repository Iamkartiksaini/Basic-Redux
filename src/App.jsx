import "./App.css";
import Header from "./Component/Header";
import First_vh from "./Pages/First_vh";
import Footer from "./Pages/Footer";
import Second_vh from "./Pages/Second_vh";
import Third_Vh from "./Pages/Third_Vh";
function App() {
  return (
    <div className="MainContainer">
      <Header />
      <First_vh />
      <Second_vh />
      <Third_Vh />
      <Footer />
    </div>
  );
}

export default App;
