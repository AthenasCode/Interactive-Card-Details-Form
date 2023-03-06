export default function CardBack({ card }) {
  //xs:bottom-28 xs:left-12

  return (
    <div
      id="cardback"
      className="relative shadow-subtle aspect-[182/100] lg:top-5 lg:bottom-0 lg:left-0 xs:w-[275px] lg:min-w-[350px] lg:max-w-[380px] lg:w-[25vw]"
    >
      <div className="relative top-[44%] left-[80%] xs:text-[45%] lg:text-sm tracking-widest">
        {card.cvc ? card.cvc : "000"}
      </div>
    </div>
  );
}
