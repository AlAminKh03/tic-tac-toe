import { useState } from "react";

    const singleSquare = "w-16 h-16  border-2 border-gray-700 text-center font-bold text-3xl"
    const squareparent = "  flex  justify-center items-center "

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
    return( 
    <div className="flex justify-center items-center h-screen">
    <div>
    <div className={squareparent}>
        <Square value={s[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className={squareparent}>
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className={squareparent}>
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </div>
    </div>
    )
  }

  export function Square({value}:{value: string | null}) {

    return <button className={singleSquare}
  
    >{value}</button>
  }