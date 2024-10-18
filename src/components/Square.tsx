import { useState } from "react";

    const singleSquare = "w-16 h-16  border-2 border-gray-700 text-center font-bold text-3xl"
    const squareparent = "  flex  justify-center items-center "

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    // const nextSquares = squares.slice();
    // console.log(squares.slice());
    // nextSquares[0] = "X";
    // setSquares(nextSquares);
  }
    return( 
    <div className="flex justify-center items-center h-screen">
    <div>
    <div className={squareparent}>
        <Square value={squares[0]}  onSquareClick={handleClick} />
        <Square value={squares[1]}  onSquareClick={handleClick} />
        <Square value={squares[2]}   onSquareClick={handleClick} />
      </div>
      <div className={squareparent}>
        <Square value={squares[3]}  onSquareClick={handleClick} />
        <Square value={squares[4]}  onSquareClick={handleClick} />
        <Square value={squares[5]}  onSquareClick={handleClick} />
      </div>
      <div className={squareparent}>
        <Square value={squares[6]}  onSquareClick={handleClick} />
        <Square value={squares[7]}  onSquareClick={handleClick} />
        <Square value={squares[8]}  onSquareClick={handleClick} />
      </div>
    </div>
    </div>
    )
  }

  export function Square({value,onSquareClick }:{value: string | null, onSquareClick: () => void}) {

    return <button className={singleSquare} onClick={onSquareClick}>{value}</button>
  }