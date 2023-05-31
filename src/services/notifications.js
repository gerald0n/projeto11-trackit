import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const errorNotification = (str) =>
   toast.error(str, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
   })
export const successNotification = (str) =>
   toast.success(str, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
   })


