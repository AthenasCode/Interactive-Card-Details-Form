export default function Form({ setCard, card, thankYou, setThankYou }) {
  const handleChange = (e) => {
    console.log(e.target.id);
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
    setThankYou(!thankYou);
  };

  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="name">
          CARDHOLDER NAME
          <br />
          <input
            id="name"
            className="w-full"
            type="text"
            name="name"
            placeholder="e.g. Jane Appleseed"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="number">
          CARD NUMBER
          <br />
          <input
            className="w-full"
            id="number"
            type="text"
            name="number"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleChange}
          />
        </label>
        <div className="flex mb-5">
          <label htmlFor="date">
            EXP. DATE (MM/YY) <br />
            <input
              className="mr-2 w-20"
              type="text"
              name="date"
              id="month"
              placeholder="MM"
              onChange={handleChange}
            />
            <input
              className="mr-5 w-20"
              type="text"
              name="date"
              id="year"
              placeholder="YY"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="CVC">
            CVC <br />
            <input
              type="text"
              id="cvc"
              name="CVC"
              placeholder="e.g. 123"
              onChange={handleChange}
            />
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
