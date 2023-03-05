export default function CardBack({ card }) {
  return (
    <div
      id="cardback"
      className="relative top-5 shadow-subtle w-[25vw] min-w-[300px] aspect-[182/100]"
    >
      <div className="relative top-[44%] left-[80%] text-[1vw] tracking-widest">
        {card.cvc ? card.cvc : "000"}
      </div>
    </div>
  );
}
