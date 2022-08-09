import React from 'react';

const UpdateModal = () => {

    const handleUpdate = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <div class="modal" id="my-modal-2">
                <div class="modal-box rounded border drop-shadow">
                    <form onSubmit={handleUpdate}>
                        <input type="text" name="title" placeholder="title" className="input input-bordered w-full" required />
                        <input type="text" name="task" placeholder="task" className="input input-bordered w-full my-2" required />
                        <div class="modal-action">
                            <a href="#" className="btn btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;