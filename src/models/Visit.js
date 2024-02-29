import { db } from '../firebase/InitialConfig'
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';

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

const visitCounterUpdater = async ()  => {
    const visitCounterRef = doc(db, "counters", "visits");
    const docSnap = await getDoc(visitCounterRef)
    const visitCounter = docSnap.data();
    
    if (visitCounter !== undefined){
        visitCounter.totalVisits++
        await updateDoc(visitCounterRef, visitCounter)
        return visitCounter.totalVisits
    }

    return undefined
}


export const visitHandler = async ()=>{
    try {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()

        if (data.ip == import.meta.env.PUBLIC_AVOID) return console.log('Visit avoided')
        if (window.location.hostname == 'localhost') return console.log('Visit avoided')
            
        await createVisit()
        const totalVisits = await visitCounterUpdater();
        console.info(`%cYou are visitor number:  ${totalVisits}`, 'background: rgb(7,7,7); color: yellowgreen')

        
    }catch(error) {
            console.log('Error:', error);
    }
}
