export default function Form({
  setCard,
  card,
  thankYou,
  setThankYou,
  blankError,
  setBlankError,
  formatError,
  setFormatError,
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
    let errorObj = {};
    //Error messages onSubmit:
    //I didn't use React Form or another library because I wanted to practice my problem solving skills.

    for (const [key, value] of Object.entries(card)) {
      //If any input field is empty
      if (!value) {
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

    //Card number, expiry date, or CVC fields are in the wrong format
    //Numbers only
    //Valid date (e.g. month <= 12)
    //Restrict MM/YY to 2 digits, restrict CVC to 3 digits
  };

  //apply conditional className if there is an error for a given input field
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
          />
          {blankError.number && (
            <div className="mt-1 text-xs text-red-error">Can't be blank</div>
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
            />
            {blankError.month || blankError.year ? (
              <div className="mt-1 text-xs text-red-error">Can't be blank</div>
            ) : null}
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
            />
            {blankError.cvc && (
              <div className="mt-1 text-xs text-red-error">Can't be blank</div>
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
