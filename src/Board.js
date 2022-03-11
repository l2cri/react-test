import Square from "./Square";

function Board(props) {
    function checkLastStep(i) {
        return props.lines.includes(i)
    }
    return (
        <div>
            <div className="status">{props.status}</div>
            <div className="board-row">
                {[0,1,2].map(i => <Square key={i} isActive={checkLastStep(i)} value={props.squares[i]} onClick={() => props.onClick(i)}  />)}
            </div>
            <div className="board-row">
                {[3,4,5].map(i => <Square key={i} isActive={checkLastStep(i)} value={props.squares[i]} onClick={() => props.onClick(i)}  />)}
            </div>
            <div className="board-row">
                {[6,7,8].map(i => <Square key={i} isActive={checkLastStep(i)} value={props.squares[i]} onClick={() => props.onClick(i)}  />)}

            </div>
        </div>
    );
};

export default Board;