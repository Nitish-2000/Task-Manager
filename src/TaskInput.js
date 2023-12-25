const TaskInput = ({ task, setTask, addTask }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="task"
        value={task}
        placeholder="Create a new task"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
