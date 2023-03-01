export default function Form({ setCard, card }) {
  const handleNameChange = (e) => {
    setCard({
      ...card,
      name: e.target.value,
    });
  };

  const handleNumberChange = (e) => {
    setCard({
      ...card,
      number: e.target.value,
    });
  };

  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="name">
          CARDHOLDER NAME
          <br />
          <input
            className="w-full"
            type="text"
            name="name"
            placeholder="e.g. Jane Appleseed"
            onChange={handleNameChange}
          />
        </label>

        <label htmlFor="number">
          CARD NUMBER
          <br />
          <input
            className="w-full"
            type="text"
            name="number"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleNumberChange}
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
            />
            <input
              className="mr-5 w-20"
              type="text"
              name="date"
              id="year"
              placeholder="YY"
            />
          </label>

          <label htmlFor="CVC">
            CVC <br />
            <input type="text" name="CVC" placeholder="e.g. 123" />
          </label>
        </div>

        <button
          type="submit"
          id="submit-btn"
          className="bg-dark-violet rounded-md py-2"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
