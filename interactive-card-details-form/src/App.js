import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <>
      <div className="h-full grid grid-cols-3">
        <div id="background-img" className="col-start-1 col-end-2"></div>
        <div className="col-start-2 col-end-4 h-full flex flex-col justify-center items-center">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
