import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tasks from './Tasks';

const Todo = () => {

    const [tasks, setTasks] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5000/tasks',
            );

            setTasks(result.data);
        };

        fetchData();
    }, [tasks]);

    const handleSaveTask = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const todo = e.target.task.value;

        const newTask = { title, todo };


        // send data on backend using post request


        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data send!', data.acknowledged);
                if (data.acknowledged === true) {
                    alert("new task added")
                }
            })


    }

    return (
        <div className='p-7'>
            <div className="bg-white sticky top-0 z-50">
                <h2 className='text-3xl font-bold flex items-center'>
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>Todays Task
                </h2>
                <div className="divider" />
                <form onSubmit={handleSaveTask}>
                    <div className="input-group">
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" required />
                        <input type="text" name="task" placeholder="task" className="input input-bordered w-full" required />
                        <button type='submit' className="btn btn-square">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </button>
                    </div>
                </form>
            </div>



            {
                tasks?.map((task) => <Tasks key={task._id} task={task} />)
            }

        </div>
    );
};

export default Todo;