import { IoMdHome, IoMdList } from "react-icons/io"
import { LuListTodo } from "react-icons/lu"
import { CiSquareCheck } from "react-icons/ci"

export const menu = [
    {
        id: 1,
        title: 'All Tacks',
        icon: IoMdHome,
        src: '/'
    },
    {
        id: 2,
        title: 'Important',
        icon: IoMdList,
        src: '/important'
    },
    {
        id: 3,
        title: 'Completed',
        icon: CiSquareCheck,
        src: '/completed'
    },
    {
        id: 4,
        title: 'Do It Now',
        icon: LuListTodo,
        src: '/doitnow'
    },
]