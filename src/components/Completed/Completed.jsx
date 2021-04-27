import {Card} from '../../components';
import './Completed.scss';

const Completed = (props) => {
    return (
        <div className="completed">
            <h3>Completed TODO's</h3>
            {props.completed.map(item => <Card key={item.id} item={item} handleTodo={props.handleTodo}/>)}
        </div>
    )
}

export default Completed;