import Task from "./Task";

const Tasks = ({ tasks, DeleteTask }) => {
   
    return (
        <div>
            {
                tasks.map((task) => <Task key={task.id} task={task} DeleteTask={DeleteTask} />)
            }
        </div>
    )
}
export default Tasks;