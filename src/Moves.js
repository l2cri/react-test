function Moves (props) {
    const {row, col} = props.step
    const desk = props.move ? 
        'Move to step #' + props.move: 
        'To start game'
    
    return (
        <li className={`history ${props.isActive ? "active" : ""}`}>
          <button onClick={props.jumpTo}>{desk} - колонка:{col},строка:{row}</button>
        </li>
      )
};

export default Moves;