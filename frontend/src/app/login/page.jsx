/* ESTILO DE USUARIOS */
import FormLogin from './formlogin'
import ImageLogo from '@/components/login/image'


const styling = {
    backgroundImage: "url('/images/background.png')",
    
    width:"100%",
    height:"100%"
}

export default function Login(){
    return (
        <div className="bg-no-repeat bg-cover bg-center" style={styling}>
            <div className="absolute bg-gradient-to-b from-gray-500 to-gray-400 opacity-80 inset-0 z-0"></div>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                {/* MENSAJE INFORMATIVO*/}
                <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                        <h1 className="mb-3 font-bold text-5xl">Bienvenido(a) </h1>
                        <p className="pr-3 text-justify	">
                            <b className='text-white'>SOFTWARE DE GESTIÓN ADMINISTRATIVA Y CONTABLE</b>.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10 relative">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div >
                            <ImageLogo />
                            <br/>
                        </div>
                        <div className="py-2 mb-4 text-center ">
                            <h6 className="font-sm  text-blue-900">Introduzca su correo y contraseña</h6>
                        </div>
                        <FormLogin />
                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span> Copyright © 2023
                                <a href="#" rel="" target="_blank" title="Softgac" className="text-green hover:text-blue-900 ">
                                        &nbsp; Softgac
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}