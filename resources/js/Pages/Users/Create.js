import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import Authenticated from '@/Layouts/Authenticated'
import { Head, useForm } from '@inertiajs/inertia-react'
import React from 'react'

const Create = (props) => {
    const { tipos_documentos } = props;

    const { data, setData, post, processing, errors, reset } = useForm({
        p_nombre: '',
        s_nombre: '',
        p_apellido: '',
        s_apellido: '',
        t_identificacion: '',
        identificacion: '',
        email: '',
        password: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        // Swal.fire(
        //     'Creado!',
        //     'Se ha creado el registro correctamente.',
        //     'success'
        // )
        post(route('save.user'));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear Usuarios</h2>}
        >
            <Head title="Crear Usuarios" />
            <ValidationErrors errors={errors}/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        AQUI DEBERIA IR EL FORMULARIO DE EDICION
                        <form onSubmit={submit}>
                            <div>
                                <Label forInput="t_identificacion" value="Tipo de Documento" />
                                <select
                                    name="t_identificacion"
                                    value={data.t_identificacion}
                                    className="mt-1 block w-full"
                                    autoComplete="t_identificacion"
                                    onChange={onHandleChange}
                                    required
                                >
                                    {
                                        tipos_documentos.map(({ id, tipo_documento }) => (
                                            <option key={id} value={id}>
                                                {tipo_documento}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <Label forInput="identificacion" value="Identificacion" />

                                <Input
                                    type="text"
                                    name="identificacion"
                                    value={data.identificacion}
                                    className="mt-1 block w-full"
                                    autoComplete="identificacion"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label forInput="p_nombre" value="Primer Nombre" />

                                <Input
                                    type="text"
                                    name="p_nombre"
                                    value={data.p_nombre}
                                    className="mt-1 block w-full"
                                    autoComplete="p_nombre"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label forInput="s_nombre" value="Segundo Nombre" />
                                <Input
                                    type="text"
                                    name="s_nombre"
                                    value={data.s_nombre}
                                    className="mt-1 block w-full"
                                    autoComplete="s_nombre"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label forInput="p_apellido" value="Primer Apellido" />
                                <Input
                                    type="text"
                                    name="p_apellido"
                                    value={data.p_apellido}
                                    className="mt-1 block w-full"
                                    autoComplete="p_apellido"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label forInput="s_apellido" value="Segundo Apellido" />
                                <Input
                                    type="text"
                                    name="s_apellido"
                                    value={data.s_apellido}
                                    className="mt-1 block w-full"
                                    autoComplete="s_apellido"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label forInput="email" value="Email" />
                                <Input
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label forInput="password" value="password" />
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="password"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-end mt-4">

                                <Button className="ml-4" processing={processing}>
                                    Crear Usuario
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Authenticated>
    )
}

export default Create