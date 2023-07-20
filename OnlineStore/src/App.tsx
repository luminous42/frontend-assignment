import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <Navigation />
      <div className="d-flex">
        <SideBar />
      </div>
    </>
  );
}

export default App;
