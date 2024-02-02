import { db } from '../firebase/InitialConfig'
import { collection, addDoc } from 'firebase/firestore';

const ipInfoApiKey = import.meta.env.PUBLIC_IPINFO_API_KEY

async function getLocationInfo(ip) {
    const apiUrl = `https://ipinfo.io/${ip}?token=${ipInfoApiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener la información de ubicación:', error);
    }
}

const createVisit = async ( locationInfo = null )=>{
    // const { city, region, country } = locationInfo
    const visit = {
        origin: "Portfolio - Astro",
        date: new Date(),
        // city: city,
        // region: region,
        // country: country
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
            if (data.ip !== import.meta.env.PUBLIC_AVOID || window.location.hostname !== 'localhost'){
                try{
                    // const locationInfo = getLocationInfo(data.ip)
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