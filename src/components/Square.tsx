export default function Square({ value, onSquareClick }: any) {
  return (
    <div>
      <button
        className="bg-black rounded-lg text-6xl text-white py-1 px-2 m-0.5 w-20 h-20"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
}
