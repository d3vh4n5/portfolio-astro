import { db } from '../firebase/InitialConfig'
import { collection, addDoc } from 'firebase/firestore';

const createVisit = async ()=>{
    const visit = {
        origin: "Portfolio - Astro",
        date: new Date(),
    }
    try{   
        const docRef = await addDoc(collection(db, 'visits'), visit)
    } catch (e){
        console.error(e)
    }
}


export const visitHandler = ()=>{
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            if (data.ip !== import.meta.env.PUBLIC_AVOID || window.location.hostname == 'localhost'){
                try{
                    createVisit()
                } catch (e) {
                    console.warn('Visit not counted')
                }
            } else {
                console.info("Visit avoided")
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
}