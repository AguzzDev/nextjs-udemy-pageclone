import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { Popover } from '@headlessui/react'

import { Icon } from "./HeaderIcon"
import AvatarHeader from "./Avatar"
import DropdownSmallScreen from "./DropdownSmallScreen";
import { PopoverIcons, PopoverUdemyButton, PopoverAprendizaje } from "./Popovers";

export default function Header() {
    return (
        <header className="w-full">
            <div className="h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"></div>
            <section className="px-6 py-4 flex border-b border-gray-300">
                {/* Left */}
                <div className="hidden md:flex pl-1 mr-5 items-center cursor-pointer">
                    <a href="/">
                        <img
                            src="https://www.udemy.com/staticx/udemy/js/webpack/udemy-pride-logo.d1b003c808a949847374f9a4267e1053.svg"
                            className="h-8 hidden md:flex object-cover"
                        />
                    </a>
                </div>
                <DropdownSmallScreen />
                {/* Center */}
                <div className="flex flex-grow md:space-x-4 lg:space-x-3 xl:space-x-6">
                    <div className="flex items-center justify-center flex-grow md:hidden">
                        <a href="/">
                            <img
                                src="https://www.udemy.com/staticx/udemy/js/webpack/udemy-pride-logo.d1b003c808a949847374f9a4267e1053.svg"
                                className="h-8  object-cover"
                            />
                        </a>
                    </div>
                    <div className="md:flex items-center hidden">
                        <h1 className="text-sm text-gray-600 font-normal tracking-thin whitespace-nowrap hover:text-blue-400 cursor-pointer">Categorías</h1>
                    </div>
                    <div className="md:flex items-center md:w-9/12 lg:w-9/12 xl:w-8/12 py-3 border border-gray-400 rounded-full hidden">
                        <span className="pl-3"><Icon Icon={SearchIcon} /></span>
                        <input type="search" className="pl-2 mr-2 w-full focus:outline-none" placeholder=" Buscar cualquier cosa"></input>
                    </div>

                    <PopoverUdemyButton />

                    <div className="lg:flex items-center hidden">
                        <h1 className="text-sm text-gray-600 font-normal tracking-thin whitespace-nowrap hover:text-blue-400 cursor-pointer">Instructores</h1>
                    </div>
                    <PopoverAprendizaje />
                </div>
                {/* Right */}
                <div className="flex md:space-x-3 lg:space-x-2 xl:space-x-3 md:ml-5">
                    <div className="flex space-x-2 items-center">
                        <div className="sm:flex md:hidden cursor-pointer">
                            <Icon Icon={SearchIcon} />
                        </div>
                        <div className="sm:flex md:hidden cursor-pointer">
                            <Icon Icon={ShoppingCartIcon} />
                        </div>
                    </div>

                    <PopoverIcons />

                    <div className="hidden md:flex rounded-full items-center cursor-pointer">
                        <AvatarHeader />
                    </div>
                </div>
            </section >
            {/* Bottom Menu */}
            < section className="hidden md:flex w-full justify-center items-center bg-gray-50 whitespace-nowrap pt-3 pb-3 text-sm text-gray-600 font-normal tracking-thin md:space-x-5 lg:space-x-3 xl:space-x-8" >

                <Popover className="relative">
                    <Popover.Button>
                        <div className="hidden md:flex cursor-pointer hover:text-blue-400">Desarrollo</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10" style={{ top: "160%", left: "-300%" }}>
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="relative">
                    <Popover.Button>
                        <div className="hidden md:flex cursor-pointer hover:text-blue-400">Negocios</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10" style={{ top: "160%", left: "-475%" }}>
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="relative">
                    <Popover.Button>
                        <div className="hidden md:flex cursor-pointer hover:text-blue-400">Finanzas y contabilidad</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10">
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="relative">
                    <Popover.Button>
                        <div className="hidden md:flex cursor-pointer hover:text-blue-400">Informática y software</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10">
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="relative">
                    <Popover.Button>
                        <div className="hidden md:flex cursor-pointer hover:text-blue-400">Productividad en la oficina</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10">
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="hidden lg:flex relative">
                    <Popover.Button>
                        <div className="hidden lg:flex cursor-pointer hover:text-blue-400">Desarrollo personal</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10">
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="hidden lg:flex relative">
                    <Popover.Button>
                        <div className="hidden lg:flex cursor-pointer hover:text-blue-400">Diseño</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10">
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="hidden lg:flex relative">
                    <Popover.Button>
                        <div className="hidden lg:flex cursor-pointer hover:text-blue-400">Marketing</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10">
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="hidden lg:flex relative">
                    <Popover.Button>
                        <div className="hidden lg:flex cursor-pointer hover:text-blue-400">Salud y fitness</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10">
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
                <Popover className="hidden lg:flex relative">
                    <Popover.Button>
                        <div className="hidden lg:flex cursor-pointer hover:text-blue-400">Música</div>
                    </Popover.Button>
                    <Popover.Panel className="absolute w-screen flex justify-center bg-black text-white p-5 space-x-5 z-10">
                        <a href="/">Desarrollo Web</a>
                        <a href="/">Desarrollo móvil</a>
                        <a href="/">Lenguajes de programación</a>
                        <a href="/">Desarrollo de videojuegos</a>
                        <a href="/">Diseño y desarrollo de bases de datos</a>
                        <a href="/">Testeo de software</a>
                    </Popover.Panel>
                </Popover>
            </section >
        </header >
    )
}

