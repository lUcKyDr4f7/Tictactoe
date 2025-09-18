import { useState, useEffect } from "react";
import styles from "../Css/Title.module.css"
export default function Title({winner}){
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    useEffect(() => {
        if (winner === "X") {
            setScoreX(prev => prev + 1);
        } else if (winner === "O") {
            setScoreO(prev => prev + 1);
        }
    }, [winner]);
    
    return(
        <>
            <div>
                <h1 className="title">Jogo da Velha </h1>
                <div className={styles.score}>
                <h3 className={styles.scorevictory}>Vitórias do X: {scoreX}</h3>
                <h3 className={styles.scorevictory}>Vitórias do O: {scoreO}</h3>
                </div>
            </div>  
        </>

    )
}