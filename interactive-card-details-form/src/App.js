import "./App.css";
import Form from "./components/form";
import { useState } from "react";

function App() {
  const [card, setCard] = useState({
    number: "0000 0000 0000 0000",
    name: "Jane Appleseed",
    date: "00/00",
    cvc: "000",
  });

  return (
    <>
      <div className="h-full grid grid-cols-3">
        <div
          className="absolute left-[17%] top-[23.5%] w-[447px] h-[245px]"
          id="cardfront"
        >
          <div>{card.number}</div>
          <div>{card.name}</div>
          <div>{card.date}</div>
        </div>
        <div
          id="cardback"
          className="absolute left-[25%] bottom-[23.5%] w-[447px] h-[245px]"
        >
          <div>{card.cvc}</div>
        </div>

        <div id="background-img" className="col-start-1 col-end-2"></div>
        <div className="col-start-2 col-end-4 h-full flex flex-col justify-center items-center">
          <Form cardNumber={card} setCardNumber={setCard} />
        </div>
      </div>
    </>
  );
}

export default App;
