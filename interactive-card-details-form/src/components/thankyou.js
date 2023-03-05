export default function ThankYou({
  thankYou,
  setThankYou,
  setCard,
  setDisplayBlank,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    setThankYou(false); //I wanted to use "!thankYou" here because it seems like best practice, but that doesn't work and I can't figure out why.
    setDisplayBlank(false);
    setCard({
      number: "",
      name: "",
      month: "",
      year: "",
      cvc: "",
    });
  };

  return (
    <div className="flex flex-col justify-center text-center w-[38%]">
      <div className="m-auto mb-4">
        <svg
          viewBox="-10 -10 100 100"
          width="80"
          height="80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="url(#a)" />
          <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" />
          <defs>
            <linearGradient
              id="a"
              x1="-23.014"
              y1="11.507"
              x2="0"
              y2="91.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6348FE" />
              <stop offset="1" stop-color="#610595" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h1 className="mb-3 text-xl tracking-widest">THANK YOU!</h1>
      <p className="text-sm text-gray-violet">We've added your card details</p>
      <button
        className="bg-dark-violet rounded-md py-2 text-white mt-7"
        onClick={handleClick}
      >
        Continue
      </button>
    </div>
  );
}
