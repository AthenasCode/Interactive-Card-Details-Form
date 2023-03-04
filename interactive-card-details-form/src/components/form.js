import { useEffect } from "react";

export default function Form({
  setCard,
  card,
  thankYou,
  setThankYou,
  blankError,
  setBlankError,
  formatError,
  setFormatError,
  dateError,
  setDateError,
  displayBlank,
  setDisplayBlank,
}) {
  const handleChange = (e) => {
    let inputType = e.target.id;
    if (inputType === "number") {
      console.log("changing number");
      const value = e.target.value
        .replace(/[^0-9]/gi, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      setCard({ ...card, [inputType]: value });
    } else {
      setCard({ ...card, [inputType]: e.target.value });
    }

    setCard({ ...card, [inputType]: e.target.value });
  };

  //display errors on submit
  const onSubmit = (e) => {
    e.preventDefault();
    setDisplayBlank(true);
    // If there are no blank errors, formatting errors, or date errors, display thankYou component.
    if (
      checkErrors(blankError) &&
      checkErrors(formatError) &&
      dateError === false
    ) {
      setThankYou(true);
    }
  };

  // Set errors on update of card state and error state
  useEffect(() => {
    handleBlankInputs();
    handleWrongFormat();
    validDate();
  }, [card]);

  function checkErrors(obj) {
    const errorArr = Object.values(obj);
    const errorCheck = (arr) => arr.every((elem) => elem === false);
    return errorCheck(errorArr);
  }

  // there is probably a better way to do this
  function handleWrongFormat() {
    const numbersOnlyCheck = ["number", "month", "year", "cvc"]; // Name is not included.
    let formatErrorObj = {};
    const formatErrorDuplicate = { ...formatError };
    numbersOnlyCheck.forEach((element) => {
      // Regex check for all numbers: /^\d+$/
      // If the input in question is not all numbers (and is not blank), set an error (true) for that element.
      if (!/^\d+$/.test(card[element]) && card[element]) {
        formatErrorObj = { ...formatErrorObj, [element]: true };
      } else {
        formatErrorObj = { ...formatErrorObj, [element]: false };
      }
    });
    Object.assign(formatErrorDuplicate, formatErrorObj);
    setFormatError(formatErrorDuplicate);
  }

  // priority for refactoring
  function handleBlankInputs() {
    let errorObj = {};
    for (const [key, value] of Object.entries(card)) {
      //If any input field is empty
      if (!value) {
        errorObj = { ...errorObj, [key]: true };
      } else {
        errorObj = { ...errorObj, [key]: false };
      }
    }
    let updatedErrorObj = { ...blankError }; //copy current state to avoid directly updating state without using the setError() function (best practice)
    Object.assign(updatedErrorObj, errorObj); //merge the errorObj with copied state (alternative is to change state here using Object.assign(error, errorObj)) - see prev comment
    setBlankError(updatedErrorObj); //update state
  }

  function validDate() {
    if (card.month > 12) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  }

  // Apply conditional className if there is an error for a given input field
  const errorConditionalStyling = (str) => {
    if (str && displayBlank) {
      return "border-solid border-red-error";
    }
    return null;
  };

  return (
    <div className="w-[36.8%]">
      <form className="h-full w-full min-w-full flex flex-col">
        <label htmlFor="name">
          CARDHOLDER NAME
          <br />
          <input
            id="name"
            className={errorConditionalStyling(blankError.name) + " w-full"}
            type="text"
            name="name"
            placeholder="e.g. Jane Appleseed"
            onChange={handleChange}
          />
          {blankError.name && displayBlank ? (
            <div className="mt-1 text-xs text-red-error">Can't be blank</div>
          ) : null}
        </label>

        <label htmlFor="number">
          CARD NUMBER
          <br />
          <input
            className={errorConditionalStyling(blankError.number) + " w-full"}
            id="number"
            type="text"
            name="number"
            value={card.number}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleChange}
            maxLength="16"
          />
          {blankError.number && displayBlank ? (
            <div className="mt-1 text-xs text-red-error">Can't be blank</div>
          ) : null}
          {formatError.number && (
            <div className="mt-1 text-xs text-red-error">
              Wrong format, numbers only
            </div>
          )}
        </label>
        <div className="flex mb-5">
          <label htmlFor="date">
            EXP. DATE (MM/YY) <br />
            <input
              className={
                errorConditionalStyling(blankError.month) + " mr-2 w-20"
              }
              type="text"
              name="date"
              id="month"
              placeholder="MM"
              onChange={handleChange}
              maxLength="2"
            />
            <input
              className={
                errorConditionalStyling(blankError.year) + " mr-5 w-20"
              }
              type="text"
              name="date"
              id="year"
              placeholder="YY"
              onChange={handleChange}
              maxLength="2"
            />
            {(blankError.month || blankError.year) && displayBlank ? (
              <div className="mt-1 text-xs text-red-error">Can't be blank</div>
            ) : null}
            {formatError.month || formatError.year ? (
              <div className="mt-1 text-xs text-red-error">
                Wrong format, numbers only
              </div>
            ) : null}
            {dateError && (
              <div className="mt-1 text-xs text-red-error">
                Month must be valid
              </div>
            )}
          </label>

          <label htmlFor="CVC">
            CVC <br />
            <input
              type="text"
              className={errorConditionalStyling(blankError.cvc)}
              id="cvc"
              name="CVC"
              placeholder="e.g. 123"
              onChange={handleChange}
              maxLength="3"
            />
            {blankError.cvc && displayBlank ? (
              <div className="mt-1 text-xs text-red-error">Can't be blank</div>
            ) : null}
            {formatError.cvc && (
              <div className="mt-1 text-xs text-red-error">
                Wrong format, numbers only
              </div>
            )}
          </label>
        </div>

        <button
          type="submit"
          id="submit-btn"
          className="bg-dark-violet rounded-md py-2"
          onClick={onSubmit}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
