import { CiCirclePlus } from "react-icons/ci"
import { FiEdit } from "react-icons/fi"
import { FaTrash } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import FormPopup from "./formPopup"

export default function CardTodo() {
    return (
        <>
            <div className="bg-[#3a3737] max-h-[200px] h-[200px] mt-5 p-3 rounded-xl border-[3px] border-[#504b4b] 
                                hover:opacity-65 hover:delay-75">
                <div className="mb-2">
                    <span className="text-[25px]">title</span>
                    <p className="line-clamp-3 text-sm my-2 max-h-[55px] h-[55px]">desciption   desciption desciptiondesciption</p>
                    <span className="text-sm">12/12/2112</span>
                </div>
                <div className="flex justify-between">
                    <div className="px-2 py-[5px] rounded-[15px] text-[13px] bg-[#0f800f]">
                        Completed!
                    </div>
                    <div className="flex items-center gap-3">
                        <div><FiEdit /></div>
                        <div><FaTrash /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
