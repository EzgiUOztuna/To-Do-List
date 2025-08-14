export default function ToDoList() {




    return (
        <>
            <h1 className="text-center">To-Do List</h1>
            <div className="flex flex-col items-center">
                <div className="flex">
                    <input name="newTask" placeholder="Add new task..."
                        className="border-1" />
                    <button type="button"
                        className="border-1">Add</button>
                </div>

                <div className="flex">
                    <div>
                        <h3>Tasks</h3>
                        <div className="flex">
                            <p>Task To Do</p>
                            <div className="flex">
                                <button type="button">In Progress</button>
                                <button type="button">Complete</button>
                                <button type="button">Delete</button>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p>Completed Tasks</p>
                    </div>
                </div>


            </div>
        </>
    )
}