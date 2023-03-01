export default function Form() {
  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="name">
          Cardholder Name <br />
          <input type="text" name="name" placeholder="e.g. Jane Appleseed" />
        </label>

        <label htmlFor="number">
          Card Number <br />
          <input
            type="text"
            name="number"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </label>

        <label htmlFor="date">
          Exp. Date (MM/YY) <br />
          <input type="text" name="date" id="month" />
          <input type="text" name="date" id="year" />
        </label>

        <label htmlFor="CVC">
          CVC <br />
          <input type="text" name="CVC" placeholder="e.g. 123" />
        </label>
      </form>
    </div>
  );
}
