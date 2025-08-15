export default function ToDoList() {




    return (
        <>
            <div className="flex flex-col mt-40 items-center text-[.9rem]">
                <h1 className="text-center font-bold text-3xl mb-6 text-[#404141]">To-Do List</h1>
                <div className="flex items-start gap-2.5 mb-4">
                    <input className="borders-text px-2 py-1 w-[36.5rem] placeholder-[#bfc2c8]  placeholder:font-light"
                        name="newTask"
                        placeholder="Add new task..." />
                    <button className="border-1 rounded-[5px] px-2.5 py-1 bg-[#3675D3] border-[#3675D3] text-white hover:bg-sky-700 cursor-pointer"
                        type="button">Add</button>
                </div>

                <div className="flex">
                    <div className="flex justify-between items-center gap-10 borders-text px-4">
                        <p className="w-[20rem] flex-wrap py-3 text-[#404141]">Task To Do Task To Do Task To Do Task To Do</p>
                        <div className="flex gap-2 py-2.5">
                            <button className="button-act"
                                type="button">In Progress</button> {/*tıklanınca turuncu olacak */}
                            <button className="button-act"
                                type="button">Complete</button> {/*tıklanınca yeşil olacak yanıp sönecek ve en aşağıya gidecek */}
                            <button className="button-act"
                                type="button">Delete</button> {/*tıklanınca kırmızı olup yanıp sönecek ve listeden de silinecek*/}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}