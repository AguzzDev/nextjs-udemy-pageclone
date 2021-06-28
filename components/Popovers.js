import { HeartIcon, ShoppingCartIcon, BellIcon } from "@heroicons/react/outline"
import { IconHover } from "./HeaderIcon"
import { Popover } from '@headlessui/react'

export function PopoverIcons() {
    return (
        <>
            <Popover className="relative flex items-center justify-center">
                <Popover.Button>
                    <div className="hidden lg:flex items-center cursor-pointer">
                        <IconHover Icon={HeartIcon} />
                    </div>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white rounded-md shadow-md border border-gray-200" style={{ top: "135%", right: "-5%", width: "20vw" }}>
                    <div className="flex flex-col my-2 mx-5">
                        <h1 className="text-center mb-4 text-sm font-medium">Tu lista de deseos está vacía.</h1>
                        <a className="text-blue-500 text-center">Descubre cursos</a>
                    </div>
                </Popover.Panel>
            </Popover>

            <Popover className="relative flex items-center justify-center">
                <Popover.Button>
                    <div className="hidden md:flex items-center cursor-pointer">
                        <IconHover Icon={ShoppingCartIcon} />
                    </div>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white rounded-md shadow-md border border-gray-200" style={{ top: "135%", right: "-5%", width: "20vw" }}>
                    <div className="flex flex-col my-2 mx-5">
                        <h1 className="text-center mb-4 text-sm font-medium">Tu cesta está vacía.</h1>
                        <a className="text-blue-500 text-center cursor-pointer hover:text-blue-600">Seguir comprando</a></div>
                </Popover.Panel>
            </Popover>

            <Popover className="relative flex items-center justify-center">
                <Popover.Button>
                    <div className="hidden lg:flex items-center cursor-pointer">
                        <IconHover Icon={BellIcon} />
                    </div>
                </Popover.Button>
                <Popover.Panel className="absolute z-10 bg-white rounded-md shadow-md border border-gray-200" style={{ top: "135%", right: "-5%", width: "22vw" }}>
                    <div className="flex justify-between items-center p-5">
                        <h1 className="font-bold text-lg">Notificaciones</h1>
                        <h1 className="font-bold text-sm text-blue-500 hover:text-blue-600 cursor-pointer">Configuracion</h1>
                    </div>
                    <div className="flex items-center border-b border-gray-200 cursor-pointer">
                        <button className="font-bold w-1/2 text-sm text-gray-600 focus:text-gray-900 border-opacity-0 focus:border-opacity-100 border-black focus:outline-none pb-3 border-b-2">Instructores</button>
                        <button className="font-bold w-1/2 text-sm text-gray-600 focus:text-gray-900 border-opacity-0 focus:border-opacity-100 border-black focus:outline-none pb-3 border-b-2">Estudiantes</button>
                    </div>
                    <div className="flex justify-center items-center p-5">
                        <h1 className="text-sm text-gray-600">No hay notificaciones</h1>
                    </div>
                </Popover.Panel>
            </Popover>
        </>
    )
}
export function PopoverUdemyButton() {
    return (
        <Popover className="relative flex items-center justify-center">
            <Popover.Button>
                <div className="lg:flex items-center hidden">
                    <h1 className="text-sm text-gray-600 font-normal tracking-thin whitespace-nowrap hover:text-blue-400 cursor-pointer">Udemy for Bussiness</h1>
                </div>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 bg-white rounded-md shadow-md border border-gray-200" style={{ top: "135%", right: "-5%", width: "19vw" }}>
                <div className="flex flex-col m-5">
                    <h1 className="text-center mb-4 text-lg font-medium text-gray-800">Dale a tu equipo acceso a más de 5.500 de los mejores cursos de Udemy en cualquier momento y lugar.</h1>
                    <a href="" className="p-3 rounded-md font-medium bg-blue-600 bg-opacity-70 text-center text-white cursor-pointer">Prueba Udemy for Bussiness</a>
                </div>
            </Popover.Panel>
        </Popover>
    )
}
export function PopoverAprendizaje() {
    return (
        <Popover className="relative flex items-center justify-center">
            <Popover.Button>
                <div className="md:flex items-center hidden">
                    <h1 className="text-sm text-gray-600 font-normal tracking-thin whitespace-nowrap hover:text-blue-400 cursor-pointer">Mi aprendizaje</h1>
                </div>
            </Popover.Button>

            <Popover.Panel className="absolute z-10 bg-white rounded-md shadow-md border border-gray-200" style={{ top: "135%", right: "-5%", width: "20vw" }}>
                <div className="flex items-center cursor-pointer p-3 border-b border-gray-200">
                    <div className="flex flex-col w-1/4 h-16 rounded-md">
                        <img src="https://img-c.udemycdn.com/course/240x135/2398608_0534_2.jpg?Expires=1624996914&Signature=AmEKGf6uU0TjJHzV9Iq9d9Rt6TdL7Ov8zMesSinOkpLUICwY597dEy0DMlz7UVvM5yH8DjA7lVxSYbevQlLnzXu1~7Qka20Hy15soDy6wy3uDv1NKlsqD7t2hsuv8E87DC34YJO7ktKHD7wJHMy3O56ltbJ3Wpz~pAAD6uEqDZUAHkoiSLnpu47HBj1kPmycZicRoetXbh417lySF~QaSusjF2xJNSh143CUxRXzCCTSXExxMrRyb7G7is8zVwahSErqe-0Wm8IfPqbbjS6tihpTAkHT51EDS3KH2IUZG4Ob3XpsHG8~k46n05U~PbxdKwgkHJeGOWFhjdVp0w9sPA__&Key-Pair-Id=APKAITJV77WS5ZT7262A" className="w-full h-full rounded-md object-cover"></img>
                    </div>
                    <div className="flex flex-col pl-4 w-3/4 mb-12">
                        <h1 className="break-words whitespace-normal">Titulo del curso</h1>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer p-3 border-b border-gray-200">
                    <div className="flex flex-col w-1/4 h-16 rounded-md">
                        <img src="https://img-c.udemycdn.com/course/240x135/3096364_6113_3.jpg?Expires=1624996914&Signature=UHlGMcso62UnQ9PspdEWe~KautymibgRITpOhV7IsYIr8hDHzX5YYykEc4BJuYEuwrd3FrhtLFxCNPqQxpBFf73M4eScH3uWoxHZa3-vcpxiSjWXba-9ko76w9DlLun9Ak-IZjXTxZFwKeJLBvdy5YZvXp8Gt7AZ~vuidEW6aZR2kHObzAOTwPZH91NF93MTPw-HGr9~gRChnF2CpTAPSnduuwh9QR3hJA8xwGaqx0xvMXWOmszyWIajHg29Fge6O8dmxfImQHnF7uh5bhKsRJhx2Y8N0M3iLKCFeAi5FfGI~cWiIJnBeHDLj-1eiypp737-aRRssSuM9bfuEGE7RA__&Key-Pair-Id=APKAITJV77WS5ZT7262A" className="w-full h-full rounded-md object-cover"></img>
                    </div>
                    <div className="flex flex-col pl-4 w-3/4 mb-12">
                        <h1 className="break-words whitespace-normal">Titulo del curso</h1>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer p-3 border-b border-gray-200">
                    <div className="flex flex-col w-1/4 h-16 rounded-md">
                        <img src="https://img-c.udemycdn.com/course/240x135/2516170_d229_2.jpg?Expires=1624996914&Signature=hw3k9Nd~QBJCXxStwDOFrx99S5JTRP8-Al58hjL4noGHDV9qu8qWkRpYBCJx~iKOToU5h8TvGhi0o2IprAXvcoW38zNbsMgTR4kgPZR6vV9KdBnrtGCQeJa7x3nhJdMBSmoPTfxUqIBDvH-NE36WFyd1sPY00IHi~XmveZZyXlQGawhYjAmF~uIneIP3HQNQCiAAT9rdlTF~9-DigUl6KVHq~Jq1vAOyIqFtfXi6w47zBkd7LmSz3h2o8PT9dCvkxyd48f4vYh~f-7KWHZiTouxzYh368yh8I6vwMGejMB9EJwa6hhiiW0E0zfFvniBR6~WMWOsnLpSWORwEgL-rFA__&Key-Pair-Id=APKAITJV77WS5ZT7262A" className="w-full h-full rounded-md object-cover"></img>
                    </div>
                    <div className="flex flex-col pl-4 w-3/4 mb-12">
                        <h1 className="break-words whitespace-normal">Titulo del curso</h1>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer p-3 border-b border-gray-200">
                    <div className="flex flex-col w-1/4 h-16 rounded-md">
                        <img src="https://img-c.udemycdn.com/course/240x135/3311100_6db7_3.jpg?Expires=1624996914&Signature=Z06b~wQECzbReqwTK6zn6yg0KL2WI3mnVKysSqb2LYcAbanINXW5uXt282CXgRE3L4MRa-VF5bkKuTI3c-VQMQVgrIvUuUVCI2yVhBck6FxxXtmEUCmEiDOmCzBCMDjhasXK9JVqXfQ1EYmWehdI3LZm-AuOQps~aHd2h-gIRIsOVzCfKKtfv46nz~~gcIvKvf4SvIyEbITeV0AZSc6uV7dM9NcHtRnnUOEEGflIkfb3ku4n9wJuN4FN-kdDzcvKQE7ocEUzzNNb0WUuSuzGHQTCLEqv-YCURqU7r8RRgfJK2ne7dBRgfedl67KPUiGSQEHzZfJ3TM1RSF-666TGNg__&Key-Pair-Id=APKAITJV77WS5ZT7262A" className="w-full h-full rounded-md object-cover"></img>
                    </div>
                    <div className="flex flex-col pl-4 w-3/4 mb-12">
                        <h1 className="break-words whitespace-normal">Titulo del curso</h1>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer p-3">
                    <a href="" className="p-3 rounded-md w-full font-medium bg-blue-600 bg-opacity-70 text-center text-white cursor-pointer">Ir a Mi Aprendizaje</a>
                </div>

            </Popover.Panel>
        </Popover>
    )
}

