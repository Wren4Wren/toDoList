const { useState } = require("react");

const ToDo = ({ task, removeHandler, archive, index }) => {
  const [ complete, setComplete ] = useState( false );
  const [ isEditing, setEditing ] = useState( false )
  
  

  return (
    <div className="Options">
      {complete ? (
        <h2 className="taskComplete">{task}</h2>
      ) : (
        <h2 className="New-Task">{task}</h2>
      )}
      <button
        type="button"
        className="Remove"
        onClick={() => removeHandler(index)}
      >
        Remove Task
      </button>
      <button
        type="button"
        className="Complete"
        onClick={() => setComplete(true)}
      >
        Completed
      </button>
      <button
        type="button"
        className="Archive"
        onClick={() => archive(index)}
      >
        Archive
      </button>
    </div>
  );
};

export default ToDo;
