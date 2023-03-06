import "./App.css";
import Form from "./components/form";
import ThankYou from "./components/thankyou";
import { useState, useLayoutEffect } from "react";
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
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <>
      <div className="xs:grid-rows-3 lg:grid-rows-none lg:grid-cols-3 h-full grid ">
        <div
          id="background-img"
          className=" xs:row-start-1 xs:row-end-2 lg:col-start-1 lg:col-end-2"
        ></div>
        <div
          id="card-div"
          className="xs:w-full xs:h-1/3 lg:w-2/3 lg:h-full lg:col-start-1 lg:col-end-2 text-white absolute flex flex-col justify-center items-center m-auto "
        >
          <CardFront className="relative z-2" card={card} width={width} />
          <CardBack className="relative z-1" card={card} />
        </div>
        <div
          id="ty-and-form-div"
          className="xs:row-start-2 xs:row-end-4 lg:row-auto lg:col-start-2 lg:col-end-4 h-full flex flex-col justify-center items-center"
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
