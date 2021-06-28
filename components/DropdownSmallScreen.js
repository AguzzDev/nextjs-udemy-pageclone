import { MenuIcon, ChevronRightIcon } from "@heroicons/react/outline"
import { Menu, Transition } from '@headlessui/react'

import { Icon } from "./HeaderIcon"

export default function DropdownSmallScreen() {
    return (
        <Menu>
            <Menu.Button className="sm:flex md:hidden cursor-pointer">
                <Icon Icon={MenuIcon} />
            </Menu.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items className="absolute flex z-50 top-0 left-0">
                    <Menu.Item>
                        <div className="flex flex-row py-5 px-7 bg-gray-200 items-center cursor-pointer">
                            <div className="h-16 w-16 mr-4">
                                <img className="rounded-full object-cover" src="https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/1/6/4chqb0yf7cd.jpg"></img>
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <h1 className="font-bold break-words">Hola, Carlos</h1>
                                <p className="text-sm text-gray-500">¡Hola de nuevo!</p>
                            </div>
                            <div className="flex">
                                <Icon Icon={ChevronRightIcon} />
                            </div>
                        </div>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
