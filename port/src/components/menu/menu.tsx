"use client"
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { menuList } from "./menulist";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

export const Menu: React.FC = () => {
    const [click, setClick] = useState<boolean>(false);
    return (
        <div className="fixed bottom-10 right-10 z-10">
            <div className="flex flex-col gap-y-5">
                {menuList.map((data, index) => {
                    return (
                        <div
                            className={twMerge(classNames(
                                "w-16 h-16 bg-white shadow-lg cursor-pointer rounded-full transition-all ease-in-out duration-300 flex items-center justify-center",
                                
                            ))}
                            onClick={() => window.open(`${data.link}`)}
                        >
                            <Image src={data.logo} width={30} height={30} alt="github" />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Menu;