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
    number: false,
    name: false,
    month: false,
    year: "",
    cvc: "",
  });

  const [formatError, setFormatError] = useState({
    number: false,
    name: false,
    month: false,
    year: false,
    cvc: false,
  });

  const [dateError, setDateError] = useState(false);

  const [thankYou, setThankYou] = useState(false);

  const [displayBlank, setDisplayBlank] = useState(false);

  return (
    <>
      <div className="h-full grid grid-cols-3">
        <div id="background-img" className="col-start-1 col-end-2"></div>
        <div className="relative z-1000 col-start-2 col-end-4 h-full flex flex-col justify-center items-center">
          {thankYou && (
            <ThankYou
              setThankYou={setThankYou}
              setCard={setCard}
              setDisplayBlank={setDisplayBlank}
            />
          )}
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
              displayBlank={displayBlank}
              setDisplayBlank={setDisplayBlank}
            />
          )}
        </div>
        <div className="text-white absolute z-1 w-2/3 h-full flex flex-col justify-center items-center m-auto col-start-1 col-end-2">
          <div
            className="relative bottom-5 right-20 shadow-subtle w-[25vw] aspect-[182/100]"
            id="cardfront"
          >
            <div>Icon</div>
            <div className="uppercase ">
              {card.number ? card.number : "0000 0000 0000 0000"}
            </div>
            <div className="uppercase">
              {card.name ? card.name : "Jane Appleseed"}
            </div>
            <div>
              {card.month
                ? card.month.length < 2
                  ? "0" + card.month
                  : card.month
                : "00"}
              /{card.year ? card.year : "00"}
            </div>
          </div>
          <div
            id="cardback"
            className="relative top-5 shadow-subtle w-[25vw] aspect-[182/100]"
          >
            <div>{card.cvc ? card.cvc : "000"}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
