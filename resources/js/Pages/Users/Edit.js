import Helmet from 'react-helmet';
import Authenticated from '@/Layouts/Authenticated'
import { Head, InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Input from '@/Components/Input';
import TextInput from '@/Components/TextInput';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import DeleteButton from '@/Components/DeleteButton';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';
import ValidationErrors from '@/Components/ValidationErrors';
import SelectInput from '@/Components/SelectInput';
const Edit = (props) => {
    const { tipos_documentos } = props;
    const { flash } = props
    const { users } = usePage().props
    console.log(flash)
    const { data, setData, put, processing, errors, reset } = useForm({
        p_nombre: users.p_nombre || '',
        s_nombre: users.s_nombre || '',
        p_apellido: users.p_apellido || '',
        s_apellido: users.s_apellido || '',
        t_identificacion: users.t_identificacion || '',
        identificacion: users.identificacion || '',
        email: users.email || '',
        // password: users.password || '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('update.user', users.id));
        // Swal.fire(
        //     'Actualización!',
        //     'Se ha actualizado el registro correctamente.',
        //     'success'
        //   )
    };

    function destroy() {
        Swal.fire({
            title: 'Esta Seguro de eliminar?',
            text: "Esta accion no podra dar marcha atras!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'cancelar',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed && !errors) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                Inertia.delete(route('destroy.user', users.id));
            }
        })
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Usuarios</h2>}
        >
            <Head title="Editar Usuarios" />
            {/* <ValidationErrors errors={errors} /> */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={submit}>
                            <div>
                                <Label forInput="t_identificacion" value="Tipo de Documento" />
                                <SelectInput
                                    errors={errors.t_identificacion}
                                    value={data.t_identificacion}
                                    onChange={e => setData('t_identificacion', e.target.value)}
                                >
                                    {
                                        tipos_documentos.map(({ id, tipo_documento }) => (
                                            <option key={id} value={id}>
                                                {tipo_documento}
                                            </option>
                                        ))
                                    }
                                </SelectInput>
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
                                    errors={errors.identificacion}
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
                                    errors={errors.p_nombre}
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
                                    errors={errors.s_nombre}
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
                                    errors={errors.p_apellido}
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
                                    errors={errors.s_apellido}
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
                                    errors={errors.email}
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-end mt-4">
                                <DeleteButton className="ml-4" onDelete={destroy}>
                                    Eliminar
                                </DeleteButton>
                                <Button className="ml-4" processing={processing}>
                                    Actualizar
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default Edit