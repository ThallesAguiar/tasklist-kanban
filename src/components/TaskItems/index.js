import React, { useState } from 'react';
import PropTypes from 'prop-types';


function TaskItems({ id, title, taskState, onTaskUpdate, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title);

    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        setEditableTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState);
    };

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            setIsEditing(false)
            if(editableTitle.length === 0) {
                onDeleteTask(id)
            }
        }
    };

    const onTaskStateChange = (event) => {
        onTaskUpdate(id, title, event.target.value)
    }

    if (isEditing) {
        return (
            <input type="text" value={editableTitle} onChange={onTitleChange} onKeyPress={onKeyPress} />
        );
    } else {
        return (
            <>
                <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
                <select onChange={onTaskStateChange} value={taskState}>
                    <option value="Pendente">Pendente</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Concluido">Concluido</option>
                </select>
            </>
        );
    };
}


TaskItems.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired,
};


export default TaskItems;
