import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function BtonLogin() {

    return (
        <div className="py-2">
            <button type="submit" className="btn bg-primary w-100  text-white" id="btologin" >Iniciar sesi&oacute;n</button>
            <ToastContainer />
        </div>
    )
}