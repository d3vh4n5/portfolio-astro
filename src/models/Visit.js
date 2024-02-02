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

            if (data.ip !== import.meta.env.PUBLIC_AVOID) return console.log('Visit avoided')
            if (window.location.hostname == 'localhost') return console.log('Visit avoided')
            
            try{
                createVisit()
            } catch (e) {
                console.warn('Visit not counted')
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
}