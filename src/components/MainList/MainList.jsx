import {Card} from '../../components';
import {AddTask} from '../../containers';
import './MainList.scss';

const MainList = (props) => {
    return (
        <div className="mainList">
            <h3>Bandeja de Entrada</h3>
            {props.todos.map(item => <Card key={item.id} item={item} handleTodo={props.handleTodo}/>)}
            <AddTask newTask={props.newTask}/>
        </div>
    )
};

export default MainList;