export default function CardFront({ card, width }) {
  return (
    <div
      className="relative bottom-5 right-20 shadow-subtle w-[25vw] min-w-[300px] aspect-[182/100] p-5 flex flex-col"
      id="cardfront"
    >
      <div>
        {width > 1900 ? (
          <svg
            viewBox="0 0 90 60"
            width="90"
            height="60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 85 55"
            width="75"
            height="45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        )}
      </div>
      <div className="uppercase tracking-widest text-[1.65vw] mt-[12%]">
        {card.number ? card.number : "0000 0000 0000 0000"}
      </div>
      <div
        id="name-and-date"
        className="flex text-[1vw] justify-between tracking-widest mt-[5%]"
      >
        <div className="uppercase">
          {card.name ? card.name : "Jane Appleseed"}
        </div>
        <div>
          {card.month
            ? card.month.length < 2
              ? "0" + card.month
              : card.month
            : "00"}
          /{card.year ? card.year : "00"}
        </div>
      </div>
    </div>
  );
}
