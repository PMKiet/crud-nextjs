import { FaPlus } from "react-icons/fa6"

export default function FormPopup() {
    return (
        <div className="fixed z-10 hidden inset-0">
            <div className="fixed bg-black min-h-screen min-w-full bg-opacity-30 flex items-center justify-center">
                <div className="bg-[#201f1f] min-h-[500px] min-w-[600px] border-[3px] border-[#504b4b] rounded-[20px] max-w-[400px]
                                    p-4">
                    {/* title */}
                    <div>
                        <h1 className="text-[19px] font-bold">Create New Task</h1>
                    </div>

                    {/* input */}
                    <div className="mt-[30px]">
                        <div className="gap-10">
                            <label htmlFor="input1">Title</label>
                            <div>
                                <input
                                    id="input1"
                                    type="text"
                                    placeholder="eg. Watch a video from Freinship"
                                    className="outline-none p-2 rounded-lg w-full bg-[#0f0f0f] placeholder:text-[#6e6e6e] placeholder:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <div className="gap-10">
                            <label htmlFor="input2">Description</label>
                            <div>
                                <textarea
                                    id="input2"
                                    placeholder="eg. Watch a video from Freinship"
                                    className="outline-none p-2 h-50px rounded-lg w-full bg-[#0f0f0f] placeholder:text-[#6e6e6e] placeholder:text-sm
                                                resize-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <div className="gap-10">
                            <label htmlFor="input3">Date</label>
                            <div>
                                <input
                                    id="input3"
                                    type=""
                                    placeholder="DD/MM/YY"
                                    className="outline-none p-2 rounded-lg w-full bg-[#0f0f0f] placeholder:text-[#6e6e6e] placeholder:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* btn */}
                    <div className="mt-[30px]">
                        <div className="p-[13px] float-end w-[150px] bg-[#2392d3] rounded-xl flex items-center justify-center gap-3 cursor-pointer
                                            hover:bg-[#1e6188] delay-75">
                            <FaPlus />
                            Create Task
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
