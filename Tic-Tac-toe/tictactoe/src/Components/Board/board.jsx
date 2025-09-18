import 'bootstrap-icons/font/bootstrap-icons.css';
import {useState} from "react"
import Button from 'react-bootstrap/Button';
import styles from "../Css/Board.module.css"

export default function Board({winner, setWinner}){
    const [cells, setCells] = useState(Array(9).fill(null));
    const [isCircleTurn, setIsCircleTurn] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(null);
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const checkForWin = (board, player) => {
        return winningCombinations.some(comb => comb.every(index => board[index] === player))
    };
    const checkForDraw = (board) => board.every(cell => cell !== null);

    const handleClick = (index) => {
        if (cells[index] !== null || winner) return;
        const newCells = [...cells];
        newCells[index] = isCircleTurn ? "circle" : "x";
        setCells(newCells);
        if (checkForWin(newCells, isCircleTurn ? "circle" : "x")) {
        setWinner(isCircleTurn ? "O" : "X");
        } else if (checkForDraw(newCells)) {
        setWinner("draw");
        } else {
        setIsCircleTurn(!isCircleTurn);
        }
    };

    const startGame = () => {
        setCells(Array(9).fill(null));
        setIsCircleTurn(false);
        setWinner(null);
    };

    return(
        <>
            <div className={`${styles.board} ${isCircleTurn ? styles.circle : styles.x}`}>
                {cells.map((cell, index) => (
                <div key={index} className={`${styles.cell} ${cell ? styles[cell] : ""}`} onClick={() => handleClick(index)} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
                {cell === "x" && <i className="bi bi-x-lg"></i>}
                {cell === "circle" && <i className="bi bi-circle"></i>}
                {cell === null && hoverIndex === index && (<i className={`bi ${isCircleTurn ? "bi-circle" : "bi-x-lg"}`} style={{ fontSize: "4.75rem" }}></i>)}
                </div>
                ))}
            </div>
            {winner && (
                <div className={styles["result-message"]}>
                <p className={styles["result-message-text"]}>{winner === "draw" ? "Empate!" : `${winner} Venceu!`}</p>
                    <Button variant="danger" onClick={startGame}>Reiniciar!</Button>
                </div>
            )}
        </>
    );
}