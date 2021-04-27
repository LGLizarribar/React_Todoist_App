import './Card.scss';

const Card = (props) => {

    const cardClick = () => {
        props.handleTodo(props.item.id);
    }

    return (
        <div className="card" onClick={cardClick}>
                <input type="radio" />
                <div>{props.item.title}</div>
        </div>
    )
}

export default Card;