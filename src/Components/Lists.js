import React, { useState } from 'react';

function Lists({ tasks, setTasks }) {
    const [edit, setEdit] = useState(false);

    const handleEditClick = (index) => {
        setEdit(true);
    };

    const deleteList = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    

    return (
        <ul className="list-disc">
            {tasks.map((task, index) => (
                <li key={index}>
                    <span contentEditable={edit.toString()}>{task}</span>
                    <button className='ml-5' onClick={handleEditClick}>&#128393;</button>
                    <button className='ml-5' onClick={() => deleteList(index)}>&#10060;</button>
                </li>
            ))}
        </ul>
    );
}

export default Lists;
