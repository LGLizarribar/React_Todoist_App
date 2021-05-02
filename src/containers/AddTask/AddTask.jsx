import { useState } from "react";
import "./AddTask.scss";

const AddTask = (props) => {
    const [openForm, setOpenForm] = useState(false);
    const [task, setTask] = useState('');

    const onCreateTask = (ev) => {
        ev.preventDefault();

        props.newTask(task);
        setTask('');
    }

    const handleOpenForm = () => {
        setOpenForm(!openForm);
        setTask('');
    }

    return (
        <div className="add-task">
            {!openForm && <div>
                <span className="add-task__icon">+</span>
                <span className="add-task__text" onClick={handleOpenForm}>Añadir Tarea</span>
            </div>}

            {openForm && <div>
                <form onSubmit={onCreateTask}>
                    <div>
                        <input type="text" onChange={(ev) => setTask(ev.target.value)} value={task}/>
                    </div>
                    <div>
                        <button type="submit">Add Task</button>
                        <button onClick={handleOpenForm}>Cancel</button>
                    </div>
                </form>
            </div>}
        </div>
    )
};

export default AddTask;
