import Authenticated from '@/Layouts/Authenticated'
import { InertiaLink, Head } from '@inertiajs/inertia-react'
import Icon from '@/Layouts/Icon'
import React from 'react'
import Pagination from '@/Components/Pagination'

const Index = (props) => {
    const { uu } = props
    const {
        data,
        links 
      } = uu;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Usuarios</h2>}
        >
            <Head title="Usuarios" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <InertiaLink
                            href={route('create.user')}
                            className="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150"
                        >Crear Usuarios
                        </InertiaLink>
                        <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr className="font-bold text-left">
                                    <th className="px-6 pt-5 pb-4">P.Nombre</th>
                                    <th className="px-6 pt-5 pb-4">S.Nombre</th>
                                    <th className="px-6 pt-5 pb-4">P.Apellido</th>
                                    <th className="px-6 pt-5 pb-4">S.Apellido</th>
                                    <th className="px-6 pt-5 pb-4">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(({ id, p_nombre, s_nombre, p_apellido, s_apellido, email }) => (
                                        <tr key={id} className="hover:bg-gray-100 focus-within:bg-gray-100">
                                            <td className="border-t">
                                                <InertiaLink
                                                    href={route('edit.user', id)}
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"

                                                >
                                                    {p_nombre}
                                                </InertiaLink>
                                            </td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    href={route('edit.user', id)}
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"

                                                >
                                                    {s_nombre}
                                                </InertiaLink></td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    href={route('edit.user', id)}
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"

                                                >{p_apellido}
                                                </InertiaLink></td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    href={route('edit.user', id)}
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"

                                                >{s_apellido}
                                                </InertiaLink></td>
                                            <td className="border-t">
                                                <InertiaLink
                                                    href={route('edit.user', id)}
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"

                                                >{email}
                                                </InertiaLink></td>
                                            <td className="border-t">
                                                <Icon
                                                    name="cheveron-right"
                                                    className="block w-6 h-6 text-gray-400 fill-current"
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* <Paginator/> */}
                    <Pagination links={links}/>
                </div>
            </div>

        </Authenticated>
    )
}

export default Index