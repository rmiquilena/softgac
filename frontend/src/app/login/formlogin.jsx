'use client'

/* EJECUCIÓN DE USUARIOS*/
import { useForm } from 'react-hook-form';
import BtonLogin from '@/components/login/boton'

import { useUserService, useAlertService } from '@/app/login/services';

export default function FormLogin() {

    const UserService = useUserService();

    const { register, handleSubmit, formState } = useForm()
    const { errors } = formState

    const fields = {
        username: register('username', { required: 'Username se requiere'}),
        password: register('password', { required: 'Password se requiere'})
    }

    const onSubmit = async (data) => {
        await UserService.login(data.username, data.password);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 " method="POST">
            <div className="space-y-5 ">
                
                <div className="space-y-2 ">
                    <input {...fields.username} type="text" autoComplete="off"
                        placeholder="Correo Electr&oacute;nico" 
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
                </div>
                <div className="space-y-2 ">
                    <input {...fields.password} type="password" autoComplete="off"
                        placeholder="Contraseña"
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message?.toString()}</div>
                </div>
            </div>
            <div className="py-2">
                <BtonLogin />
            </div>
        </form>
    )

}