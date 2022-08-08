import React from 'react';

const Tasks = ({ task }) => {
    const { _id, title, todo } = task;

    const handleTaskDelete = (id) => {
        const ok = window.confirm("Are you sure?");
        const url = `http://localhost:5000/todo/${id}`;

        if (ok) {
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        alert("Successfully delete!")
                    }
                })
        }

    }
    const handleTaskComplete = (id) => {
        const url = `http://localhost:5000/todo/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert("congratulation, you did it!")
                }
            })
    }


    return (
        <div className='border drop-shadow rounded-xl my-2 w-full h-32 p-2'>
            <div className="flex absolute right-2 block">
                <button onClick={() => handleTaskComplete(_id)} className="btn btn-xs btn-circle btn-outline btn-neutral"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></button>
                <button className="btn btn-xs btn-circle btn-outline btn-neutral mx-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>
                <button onClick={() => handleTaskDelete(_id)} className="btn btn-xs btn-circle btn-outline btn-neutral"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
            </div>
            <div>
                <h2 className='text-xl text-success'>{title}</h2>
                <p>{todo}</p>
            </div>
        </div>
    );
};

export default Tasks;