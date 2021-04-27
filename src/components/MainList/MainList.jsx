import {Card} from '../../components';
import './MainList.scss';

const MainList = (props) => {
    return (
        <div className="mainList">
            <h3>Bandeja de Entrada</h3>
            {props.todos.map(item => <Card key={item.id} item={item} handleTodo={props.handleTodo}/>)}
        </div>
    )
};

export default MainList;