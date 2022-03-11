function Square(props) {
    return (
        <button className={`square ${props.isActive ? "active" : ""}`} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;