import React from 'react';
import PropTypes from 'prop-types';

import TaskItems from '../TaskItems/index';


function TaskList({ title, taskState, onAddTask, tasks, onTaskUpdate, onDeleteTask}) {
    const addTask = () => {
        onAddTask("Nova tarefa", taskState);
    }

    return (
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content">
                {tasks.map((task) => {
                    return (
                        <>
                        {console.log(task)}
                        <TaskItems
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            taskState={task.state}
                            onTaskUpdate={onTaskUpdate}
                            onDeleteTask={onDeleteTask}
                        />
                        </>
                    )
                })}
            </div>
            <button onClick={addTask}>Adicionar tarefa</button>
        </div>
    );
}


TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,

};


export default TaskList;
