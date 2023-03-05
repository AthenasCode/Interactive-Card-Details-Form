import "./App.css";
import Form from "./components/form";
import ThankYou from "./components/thankyou";
import { useState } from "react";
import CardFront from "./components/cardFront";
import CardBack from "./components/cardBack";

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
    year: false,
    cvc: false,
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
        <div
          id="card-div"
          className="text-white absolute w-2/3 h-full flex flex-col justify-center items-center m-auto col-start-1 col-end-2"
        >
          <CardFront card={card} />
          <CardBack card={card} />
        </div>
        <div
          id="ty-and-form-div"
          className="relative z-1000 col-start-2 col-end-4 h-full flex flex-col justify-center items-center"
        >
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
      </div>
    </>
  );
}

export default App;
