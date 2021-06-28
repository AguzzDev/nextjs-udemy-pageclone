import { GlobeAltIcon } from "@heroicons/react/solid"
import { Popover } from '@headlessui/react'

import { Icon } from "./HeaderIcon"

export default function AvatarHeader() {
    return (
        <Popover className="relative flex items-center justify-center">
            <Popover.Button>
                <div className="w-9 h-9">
                    <img className="rounded-full object-cover" src="https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/1/6/4chqb0yf7cd.jpg"></img>
                </div>
            </Popover.Button>

            <Popover.Panel className="absolute z-10 bg-white rounded-md shadow-md border border-gray-200" style={{ top: "160%", right: "0%" }}>
                <div className="flex flex-row p-4 items-center cursor-pointer border-b border-gray-200">
                    <div className="h-16 w-16 mr-4">
                        <img className="rounded-full object-cover" src="https://studiosol-a.akamaihd.net/uploadfile/cifraclub/avatar/1/6/4chqb0yf7cd.jpg"></img>
                    </div>
                    <div className="flex flex-col flex-grow overflow-hidden">
                        <h1 className="font-bold hover:text-blue-500">Carlos</h1>
                        <p className="text-sm text-gray-500">example@gmail.com</p>
                    </div>
                </div>
                <div className="flex flex-col text-sm border-b border-gray-200">
                    <a className="my-3 mx-4 hover:text-blue-500">Mi aprendizaje</a>
                    <a className="my-3 mx-4 hover:text-blue-500">Mi cesta </a>
                    <a className="my-3 mx-4 hover:text-blue-500">Lista de deseos </a>
                    <a className="my-3 mx-4 hover:text-blue-500">Panel del instructor </a>
                </div>
                <div className="flex flex-col text-sm border-b border-gray-200">
                    <a className="my-3 mx-4 hover:text-blue-500">Notificaciones </a>
                    <a className="my-3 mx-4 hover:text-blue-500">Mensajes </a>
                </div>
                <div className="flex flex-col text-sm border-b border-gray-200">
                    <a className="my-3 mx-4 hover:text-blue-500">Configuración de cuenta </a>
                    <a className="my-3 mx-4 hover:text-blue-500">Métodos de pago</a>
                    <a className="my-3 mx-4 hover:text-blue-500">Créditos de Udemy </a>
                    <a className="my-3 mx-4 hover:text-blue-500">Historial de compras </a>
                </div>
                <div className="flex flex-row justify-between text-sm border-b border-gray-200">
                    <a className="my-3 mx-4 hover:text-blue-500">Idioma </a>
                    <h1 className="flex items-center mr-5 text-sm">
                        Español
                        <Icon Icon={GlobeAltIcon} />
                    </h1>
                </div>
                <div className="flex flex-col text-sm border-b border-gray-200">
                    <a className="my-3 mx-4 hover:text-blue-500">Perfil público</a>
                    <a className="my-3 mx-4 hover:text-blue-500">Editar perfil </a>
                </div>
                <div className="flex flex-col text-sm border-b border-gray-200">
                    <a className="my-3 mx-4 hover:text-blue-500">Ayuda </a>
                    <a className="my-3 mx-4 hover:text-blue-500">Cerrar sesión</a>
                </div>
                <div className="flex flex-col pb-2">
                    <a className="my-3 mx-4">
                        <div className="flex flex-row justify-between">
                            <h1 className="font-bold hover:text-blue-500">Udemy for Bussiness</h1>
                            <svg className="h-6" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
                        </div>
                        <p className="text-sm text-gray-600">Lleva el aprendizaje a tu empresa</p>
                    </a>
                </div>
            </Popover.Panel>
        </Popover >
    )
}

