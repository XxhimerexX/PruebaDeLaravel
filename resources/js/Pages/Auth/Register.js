import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register(props) {
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

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />

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
                    <Label forInput="identificacion" value="Numero de Documento" />

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

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Already registered?
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
