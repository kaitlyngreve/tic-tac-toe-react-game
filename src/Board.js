import { useState, useEffect, useRef } from 'react'

function Board({ reset, setReset, winner, setWinner }) {

    const [turn, setTurn] = useState(0);
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);

    const boardRef = useRef(null);

    const play = (e, index) => {
        if (data[index - 1] === '' && winner === '') {

            // plays an X if it is player 1's turn, otherwise plays an O
            const current = turn === 0 ? "X" : "O"
            data[index - 1] = current;

            e.target.innerText = current;

            setTurn(turn === 0 ? 1 : 0)
        }
    }

    useEffect(() => {
        setData(['', '', '', '', '', '', '', '', '']);

        const cells = boardRef.current.children

        for (let i = 0; i < 9; i++) {
            cells[i].innerText = '';
        }

        setTurn(0);
        setWinner('');
        setReset(false);
    }, [reset, setReset, setWinner])

    return
}

export default Board;