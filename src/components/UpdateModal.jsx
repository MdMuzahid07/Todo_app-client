import React from 'react';
import { toast } from 'react-toastify';


const UpdateModal = ({ idForUpdate }) => {

    const taskId = idForUpdate;

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const todo = e.target.task.value;

        const updatedTask = { title: title, todo: todo };

        const url = `http://localhost:5000/todo/${taskId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount === 1) {
                    toast.success(`Id: ${taskId} Update successfully!`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
                <label class="modal-box relative rounded" for="">
                    <p className="font-bold text-success"><small>updating id : <span className='text-black'>{taskId}</span></small></p>
                    <form onSubmit={handleUpdateSubmit}>
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" required />
                        <input type="text" name="task" placeholder="task" className="input input-bordered w-full my-2" required />
                        <div class="modal-action">
                            <button type="submit" href="#" className="btn btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg></button>
                        </div>
                    </form>
                </label>
            </label>
        </div >
    );
};

export default UpdateModal;