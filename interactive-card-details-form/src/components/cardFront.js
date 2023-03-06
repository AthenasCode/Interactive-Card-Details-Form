export default function CardFront({ card }) {
  //xs:top-32 xs:right-5

  return (
    <div
      className="relative z-1 aspect-[182/100] xs:p-5 lg:p-5 xs:bottom-16 lg:top-0 lg:bottom-5 lg:right-20 shadow-subtle xs:w-[275px] lg:min-w-[350px] lg:max-w-[380px] lg:w-[25vw]"
      id="cardfront"
    >
      <div>
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
      </div>
      <div className="uppercase tracking-widest xs:text-sm lg:text-xl mt-[12%]">
        {card.number ? card.number : "0000 0000 0000 0000"}
      </div>
      <div
        id="name-and-date"
        className="flex xs:text-[10px] lg:text-sm justify-between tracking-widest mt-[5%]"
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
