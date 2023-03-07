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
  cvcShort,
  setCvcShort,
  numberShort,
  setNumberShort,
}) {
  const handleChange = (e) => {
    let inputType = e.target.id;
    if (inputType === "number") {
      const value = e.target.value
        .replace(/[^0-9]/gi, "") //match all non-numbers, replace with "" (don't allow letter input at all)
        .replace(/(.{4})/g, "$1 ") //match four of any character except line breaks (eg "1234"), replace with those same four + " "
        .trim();
      setCard({ ...card, [inputType]: value });
    } else {
      setCard({ ...card, [inputType]: e.target.value });
    }
  };

  //display errors on submit
  const onSubmit = (e) => {
    e.preventDefault();
    setDisplayBlank(true);
    // If there are no blank errors, formatting errors, or date errors, display thankYou component.
    if (
      checkErrors(blankError) &&
      checkErrors(formatError) &&
      cvcShort === false &&
      numberShort === false &&
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
    handleCvcTooShort();
    handleNumberTooShort();
  }, [card]);

  function checkErrors(obj) {
    const errorArr = Object.values(obj);
    const errorCheck = (arr) => arr.every((elem) => elem === false);
    return errorCheck(errorArr);
  }

  // there is probably a better way to do this
  function handleWrongFormat() {
    const numbersOnlyCheck = ["month", "year", "cvc"]; // Name is not included.
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

  function handleCvcTooShort() {
    if (card.cvc.length < 3) {
      setCvcShort(true);
    } else {
      setCvcShort(false);
    }
  }

  function handleNumberTooShort() {
    if (card.number.length < 19) {
      setNumberShort(true);
    } else {
      setNumberShort(false);
    }
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
    <div className="xs:w-full xs:max-w-[500px] xs:p-5 lg:w-[38%]">
      <form className="h-full w-full min-w-full flex flex-col tracking-widest">
        <label htmlFor="name">
          CARDHOLDER NAME
          <br />
          <input
            id="name"
            className={
              errorConditionalStyling(blankError.name) +
              " w-full focus:outline-none focus:border-solid focus:border-violet-900 placeholder-light-violet"
            }
            type="text"
            name="name"
            placeholder="e.g. Jane Appleseed"
            onChange={handleChange}
          />
          {blankError.name && displayBlank ? (
            <div className="mt-1 text-[13px] tracking-normal text-red-error">
              Can't be blank
            </div>
          ) : null}
        </label>

        <label className="mt-3" htmlFor="number">
          CARD NUMBER
          <br />
          <input
            className={
              errorConditionalStyling(blankError.number) +
              " w-full focus:outline-none focus:border-solid focus:border-violet-900 placeholder-light-violet"
            }
            id="number"
            type="text"
            name="number"
            value={card.number}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleChange}
            maxLength="19"
          />
          {blankError.number && displayBlank ? (
            <div className="mt-1 text-[13px] tracking-normal text-red-error">
              Can't be blank
            </div>
          ) : null}
          {formatError.number && (
            <div className="mt-1 text-[13px] tracking-normal text-red-error">
              Wrong format, numbers only
            </div>
          )}
          {numberShort && displayBlank ? (
            <div className="mt-1 text-[13px] text-red-error tracking-normal">
              Number must be 16 digits
            </div>
          ) : null}
        </label>
        <div id="month-year-cvc-div" className="grid grid-cols-2 mb-5 mt-3">
          <label htmlFor="month">
            EXP. DATE (MM/YY) <br />
            <input
              className={
                errorConditionalStyling(blankError.month) +
                " mr-2 w-[42%] focus:outline-none focus:border-solid focus:border-violet-900 placeholder-light-violet"
              }
              type="text"
              name="date"
              id="month"
              placeholder="MM"
              onChange={handleChange}
              maxLength="2"
            />
            <label htmlFor="year" className="sr-only">
              Year
            </label>
            <input
              className={
                errorConditionalStyling(blankError.year) +
                " w-[42%] focus:outline-none focus:border-solid focus:border-violet-900 placeholder-light-violet"
              }
              type="text"
              name="date"
              id="year"
              placeholder="YY"
              onChange={handleChange}
              maxLength="2"
            />
            {(blankError.month || blankError.year) && displayBlank ? (
              <div className="mt-1 text-[13px] text-red-error tracking-normal">
                Can't be blank
              </div>
            ) : null}
            {formatError.month || formatError.year ? (
              <div className="mt-1 text-[13px] text-red-error tracking-normal">
                Wrong format, numbers only
              </div>
            ) : null}
            {dateError && (
              <div className="mt-1 text-[13px] text-red-error tracking-normal">
                Month must be valid
              </div>
            )}
          </label>

          <label htmlFor="CVC">
            CVC <br />
            <input
              type="text"
              className={
                errorConditionalStyling(blankError.cvc) +
                " w-full focus:outline-none focus:border-solid focus:border-violet-900 placeholder-light-violet"
              }
              id="cvc"
              name="CVC"
              placeholder="e.g. 123"
              onChange={handleChange}
              maxLength="3"
            />
            {blankError.cvc && displayBlank ? (
              <div className="mt-1 text-[13px] text-red-error tracking-normal">
                Can't be blank
              </div>
            ) : null}
            {formatError.cvc && (
              <div className="mt-1 text-[13px] text-red-error tracking-normal">
                Wrong format, numbers only
              </div>
            )}
            {cvcShort && displayBlank ? (
              <div className="mt-1 text-[13px] text-red-error tracking-normal">
                CVC must be three digits
              </div>
            ) : null}
          </label>
        </div>

        <button
          type="submit"
          id="submit-btn"
          className="bg-dark-violet rounded-md py-2 text-white"
          onClick={onSubmit}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
