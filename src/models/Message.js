import { db } from '../firebase/InitialConfig'
import { collection, addDoc, getDoc } from 'firebase/firestore';

export async function createMessage(msj){
    try{
        const docRef = await addDoc(collection(db, 'messages'), msj)
        console.log('%cMensaje enviado correctamente', 'background: lightgreen; color:green;')
    } catch (e){
        console.error("Error al crear un mensaje: ", e)
        alert("Error sending message, please use other method to contac Juan")
    }
}