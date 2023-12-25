const TaskList = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="task-list">
          {list.map((entry, index) => (
            <div className="task">
              <li key={index}> {entry} </li>

              <button
                className="delete-button"
                onClick={() => {
                  remove(entry);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
};

export default TaskList;
