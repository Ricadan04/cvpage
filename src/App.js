import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-8">
      <Header/>
      <Sidebar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
