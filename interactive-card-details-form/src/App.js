import "./App.css";
import Form from "./components/form";
import ThankYou from "./components/thankyou";
import { useState } from "react";

function App() {
  const [card, setCard] = useState({
    number: "",
    name: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [blankError, setBlankError] = useState({
    number: "",
    name: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [formatError, setFormatError] = useState({
    number: "",
    name: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [dateError, setDateError] = useState(false);

  const [thankYou, setThankYou] = useState(false);

  return (
    <>
      <div className="h-full grid grid-cols-3">
        <div
          className="absolute left-[17%] top-[23.5%] w-[447px] h-[245px]"
          id="cardfront"
        >
          <div>{card.number ? card.number : "0000 0000 0000 0000"}</div>
          <div>{card.name ? card.name : "Jane Appleseed"}</div>
          <div>
            {card.month ? card.month : "00"}/{card.year ? card.year : "00"}
          </div>
        </div>
        <div
          id="cardback"
          className="absolute left-[25%] bottom-[23.5%] w-[447px] h-[245px]"
        >
          <div>{card.cvc ? card.cvc : "000"}</div>
        </div>

        <div id="background-img" className="col-start-1 col-end-2"></div>
        <div className="col-start-2 col-end-4 h-full flex flex-col justify-center items-center">
          {thankYou && <ThankYou setThankYou={setThankYou} setCard={setCard} />}
          {!thankYou && (
            <Form
              card={card}
              setCard={setCard}
              thankYou={thankYou}
              setThankYou={setThankYou}
              blankError={blankError}
              setBlankError={setBlankError}
              formatError={formatError}
              setFormatError={setFormatError}
              dateError={dateError}
              setDateError={setDateError}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
