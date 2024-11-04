"use client";

import sleep from "../../public/image/sleep.jpg";
import Image from "next/image";
import { menu } from "../utils/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci"
import { IoMenu, IoCloseOutline } from "react-icons/io5"

import { useState } from "react";

export default function SideBar() {
    const [opentMenu, setOpentMenu] = useState(true)
    const pathName = usePathname();

    return (
        <>
            {opentMenu &&

                <div
                    onClick={() => setOpentMenu(false)}
                    className="absolute w-8 h-10 bg-[#272626] md:hidden border border-l-0 left-0 border-[#504b4b] top-8
                                    z-50 flex justify-center items-center  ">
                    <IoMenu />
                </div>
            }
            {!opentMenu &&
                <div
                    onClick={() => setOpentMenu(true)}
                    className="fixed bg-black min-h-screen min-w-full bg-opacity-30 flex items-center justify-center">
                </div >
            }
            <div className={`bg-[#272626] md:border-[3px] border border-[#504b4b] py-2 rounded-md md:static z-50 fixed flex flex-col justify-between
                          h-[calc(100%_-_30px)] sm:h-full ${opentMenu ? 'left-[-100%]' : 'left-[0]'} transition-all  `}>

                {/* Toggle menu */}
                <div
                    onClick={() => setOpentMenu(true)}
                    className="absolute w-8 h-10 md:hidden bg-[#272626] border border-l-0 border-[#504b4b] right-[-32px] top-4
                                    flex justify-center items-center z-20">
                    <IoCloseOutline />
                </div>
                {/* Toggle menu */}

                {/* avatar */}

                <div className="flex flex-col items-center justify-center gap-1 relative z-10 hover:after:w-[80%] hover:after:h-[100%] cursor-pointer
                                after:absolute hover:after:bg-black after:-z-10 after:opacity-50 after:rounded-md after:transition-all">
                    <Image src={sleep} alt="avatar" width={70} className="rounded-full" />
                    <p>Name</p>


                </div>

                {/* nav */}
                <div>
                    <ul className="gap-1 flex flex-col">
                        {menu.map((item) => (
                            <Link
                                href={item.src}
                                key={item.id}
                                className={`relative px-11 py-2 flex items-center gap-3 font-bold text-[#818186] overflow-hidden
                                    after:transition-all after:ease-in-out after:duration-200 after:bg-[#383535] after:absolute 
                                    after:h-full after:w-0  hover:after:w-full hover:after:opacity-70 after:left-0 after:delay-100
                                    ${pathName === item.src
                                        ? `before:border-r-4 before:h-full before:w-full before:absolute 
                                    before:border-[#28c2d6] before:left-0 bg-[#423f3f] text-white`
                                        : ""
                                    }`}
                            >
                                <i>
                                    {/* bg-[#423f3f] */}
                                    <item.icon />
                                </i>
                                {item.title}
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* authen */}
                <div
                    className={`relative px-11 py-2 flex items-center gap-3 font-bold text-[#818186] overflow-hidden cursor-pointer
                                    after:transition-all after:ease-in-out after:duration-200 after:bg-[#383535] after:absolute 
                                    after:h-full after:w-0 hover:after:w-full hover:after:opacity-70 after:left-0 after:delay-100 
                                    `}
                >
                    <i>
                        <CiLogout />
                    </i>
                    LogOut
                </div>
            </div>
        </>
    );
}
