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
}) {
  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setCard({
          ...card,
          name: e.target.value,
        });
        break;
      case "number":
        setCard({
          ...card,
          number: e.target.value,
        });
        break;
      case "month":
        setCard({
          ...card,
          month: e.target.value,
        });
        break;
      case "year":
        setCard({
          ...card,
          year: e.target.value,
        });
        break;
      case "cvc":
        setCard({
          ...card,
          cvc: e.target.value,
        });
        break;
      default:
        console.log("error: default switch");
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // *HANDLE BLANK INPUTS*
    //I didn't use React Form or another library because I wanted to practice my problem solving skills.
    handleBlankInputs();

    // *HANDLE WRONG FORMAT*
    // Card number, month, year, and cvc should have numbers only
    handleWrongFormat();

    // Valid date (e.g. month <= 12)
    validDate();

    //Restrict MM/YY to 2 digits, restrict CVC to 3 digits
  };

  function handleWrongFormat() {
    const numbersOnlyChecks = ["number", "month", "year", "cvc"];
    let formatErrorObj = {};
    const formatErrorDuplicate = { ...formatError };
    numbersOnlyChecks.forEach((element) => {
      if (!/^\d+$/.test(card[element]) && card[element]) {
        formatErrorObj = { ...formatErrorObj, [element]: true };
      }
    });
    console.log(formatErrorObj);
    Object.assign(formatErrorDuplicate, formatErrorObj);
    setFormatError(formatErrorDuplicate);
  }

  function handleBlankInputs() {
    let errorObj = {};
    for (const [key, value] of Object.entries(card)) {
      //If any input field is empty
      if (!value) {
        //switch could probably be tidied similarly to what I did for the formatting errors below.
        switch (key) {
          case "name":
            errorObj = { ...errorObj, name: true };
            break;
          case "number":
            errorObj = { ...errorObj, number: true };
            break;
          case "month":
            errorObj = { ...errorObj, month: true };
            break;
          case "year":
            errorObj = { ...errorObj, year: true };
            break;
          case "cvc":
            errorObj = { ...errorObj, cvc: true };
            break;
          default:
            console.log("error: default switch");
            break;
        }
      }
    }
    //if there is an error and state needs to be updated to reflect that:
    if (errorObj) {
      let updatedErrorObj = { ...blankError }; //copy current state to avoid directly updating state without using the setError() function (best practice)
      Object.assign(updatedErrorObj, errorObj); //merge the errorObj with copied state (alternative is to change state here using Object.assign(error, errorObj)) - see prev comment
      setBlankError(updatedErrorObj); //update state
    } else {
      setThankYou(!thankYou);
    }
  }

  function validDate() {
    if (card.month > 12) {
      setDateError(true);
    }
  }

  // Apply conditional className if there is an error for a given input field
  const errorConditionalStyling = (str) => {
    if (str) {
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
          {blankError.name && (
            <div className="mt-1 text-xs text-red-error">Can't be blank</div>
          )}
        </label>

        <label htmlFor="number">
          CARD NUMBER
          <br />
          <input
            className={errorConditionalStyling(blankError.number) + " w-full"}
            id="number"
            type="text"
            name="number"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleChange}
            maxLength="16"
          />
          {blankError.number && (
            <div className="mt-1 text-xs text-red-error">Can't be blank</div>
          )}
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
            {blankError.month || blankError.year ? (
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
            {blankError.cvc && (
              <div className="mt-1 text-xs text-red-error">Can't be blank</div>
            )}
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
