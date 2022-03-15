import Square from "./Square";

function Board(props) {
    function checkLastStep(i) {
        return props.lines.includes(i)
    }
    return (
        <div>
            <div className="status">{props.status}</div>
            <div className="board-row">
                {Array(9).fill(null)
                    .map((_, i) => <Square 
                                    key={i} 
                                    isActive={checkLastStep(i)} 
                                    value={props.squares[i]} 
                                    onClick={() => props.onClick(i)}  
                                />)}
            </div>
        </div>
    );
};

export default Board;