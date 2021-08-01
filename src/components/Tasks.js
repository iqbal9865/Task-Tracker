import Task from "./Task";

const Tasks = ({ tasks, DeleteTask, toggleRemainder }) => {
   
    return (
        <div>
            {
                tasks.map((task) => <Task key={task.id} task={task} DeleteTask={DeleteTask} toggleRemainder={toggleRemainder} />)
            }
        </div>
    )
}
export default Tasks;