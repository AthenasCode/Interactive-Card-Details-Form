export default function CardFront({ card }) {
  //xs:top-32 xs:right-5
  //svg 85 55

  return (
    <div
      className="relative z-20 aspect-[182/100] xs:p-4 lg:p-5 xs:bottom-[65px] lg:top-0 lg:bottom-5 lg:right-20 shadow-subtle xs:w-[275px] lg:min-w-[350px] lg:max-w-[380px] lg:w-[25vw]"
      id="cardfront"
    >
      <div className="xs:h-6 lg:h-8">
        <svg
          viewBox="0 0 84 47"
          preserveAspectRatio="xMinYMin meet"
          width="auto"
          height="100%"
          className="max-w-100%"
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
      <div className="uppercase tracking-widest xs:text-[18px] lg:text-[25px] xs:mt-[14%] lg:mt-[16%]">
        {card.number ? card.number : "0000 0000 0000 0000"}
      </div>
      <div
        id="name-and-date"
        className="flex xs:text-[10px] lg:text-[13px] justify-between tracking-widest xs:mt-[5%] lg:mt-[5%]"
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
