export default function ThankYou({ thankYou, setThankYou, setCard }) {
  const handleClick = (e) => {
    console.log("clicked");
    e.preventDefault();
    setThankYou(false); //I wanted to use "!thankYou" here because it seems like best practice, but that doesn't work and I can't figure out why.
    setCard({
      number: "0000 0000 0000 0000",
      name: "Jane Appleseed",
      month: "00",
      year: "00",
      cvc: "000",
    });
  };

  return (
    <div>
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button onClick={handleClick}>Continue</button>
    </div>
  );
}
