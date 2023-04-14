import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
  <>
  <Navbar title= 'TextUtils' home='Home'/>
  <div className="container my-3" >
  <TextForm heading = "Enter your Text below to analyze"/>
  </div>
  </>
  );
}

export default App;
