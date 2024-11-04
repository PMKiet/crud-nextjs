import CardTodo from "./components/cardTodo"
import { CiCirclePlus } from "react-icons/ci"
import { FiEdit } from "react-icons/fi"
import { FaTrash } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import FormPopup from "./components/formPopup"

export default function Home() {
  return (
    <div className='bg-[#272626] border-[3px] flex-1 border-[#504b4b] py-2 rounded-md flex flex-col p-4'>
      {/* header */}
      <div className="flex justify-between">
        <h1 className="text-[30px] font-bold relative after:absolute after:w-[40px] after:h-[4px] after:bg-[#55efc4] after:left-0
                                after:bottom-0">
          All Tasks
        </h1>
        <div className=" "><CiCirclePlus className="w-14 h-14 text-[#c2b4b4] shadow-lg rounded-full" /></div>
      </div>

      {/* card */}
      <div className="h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 overflow-auto">
        <CardTodo />
        <CardTodo />
        <CardTodo />
        <CardTodo />
        <CardTodo />
        <CardTodo />

        {/* add new */}
        <div className="bg-[#1f1e1e] max-h-[200px]  h-[200px]  mt-5 p-3 rounded-xl border-[3px] border-[#312f2f]
                                  flex items-center justify-center gap-2 hover:opacity-65 hover:delay-75">
          <FaPlus />
          Add New Task
        </div>
      </div>
      {/* From */}
      <FormPopup />
    </div >


  )
}
