import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "../store/actions/toDoActions";

export default function ToDoList() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.toDos);

    useEffect(() => {
        dispatch(setTask());
    }, [dispatch]);



    return (
        <>
            <div className="flex flex-col mt-40 items-center text-[.9rem]">
                <h1 className="text-center font-bold text-3xl mb-6 text-[#404141]">To-Do List</h1>
                <div className="flex items-start gap-2.5 mb-4">
                    <input className="borders-text px-2 py-1 w-[36.5rem] placeholder-[#bfc2c8]  placeholder:font-light"
                        name="newTask"
                        placeholder="Add new task..." />
                    <button
                        type="button"
                        className="border-1 rounded-[5px] px-2.5 py-1 bg-[#3675D3] border-[#3675D3] text-white hover:bg-sky-700 cursor-pointer"
                    >Add</button>
                </div>


                <div className="flex flex-col">
                    {tasks.map((task, index) => (
                        <div key={index} className="borders-text1 flex justify-between items-center gap-10 px-4">
                            <p className="w-[20rem] flex-wrap py-3 text-[#404141]">{task.title}</p>
                            <div className="flex gap-2 py-2.5">
                                <button className="button-act hover:bg-amber-500"
                                    type="button">In Progress</button> {/*tıklanınca turuncu olacak */}
                                <button className="button-act hover:bg-green-600"
                                    type="button">Complete</button> {/*tıklanınca yeşil olacak yanıp sönecek ve en aşağıya gidecek */}
                                <button className="button-act hover:bg-red-600"
                                    type="button">Delete</button> {/*tıklanınca kırmızı olup yanıp sönecek ve listeden de silinecek*/}
                            </div>
                        </div>
                    ))
                    }




                </div>
            </div>
        </>
    )
}