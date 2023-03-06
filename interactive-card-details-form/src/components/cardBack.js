export default function CardBack({ card }) {
  //

  return (
    <div
      id="cardback"
      className="relative z-10 shadow-subtle aspect-[182/100] xs:justify-self-end xs:row-start-1 lg:top-5 lg:bottom-0 lg:left-0 lg:right-0 xs:w-[275px] lg:min-w-[350px] lg:max-w-[380px] lg:w-[25vw]"
    >
      <div className="relative xs:top-[45%] lg:top-[44%] left-[80%] xs:text-[55%] lg:text-sm tracking-widest">
        {card.cvc ? card.cvc : "000"}
      </div>
    </div>
  );
}
