<script setup>
import {ref, computed, onMounted} from 'vue'
import { geti18n } from '../../../i18n/index';
import { CONTACT } from '@/data/contact.data';
import { createMessage } from '../../../models/Message';
import Modal from './Modal.vue';

const currentHref= window.location.pathname
const currentLocale = currentHref.split('/')[1]
const contactContent = CONTACT[currentLocale || 'es']
const content = geti18n(currentLocale)
const errorList = ref([])
const showModal = ref(false)
const modalMsg = ref({
    title : 'Test',
    description: 'Test message Test message Test message Test message',
    danger: false
})
const msgSent = ref(false)

onMounted(()=>{
    
    window.onloadTurnstileCallback = function () {
        turnstile.render('#captcha-container', {
            sitekey: import.meta.env.PUBLIC_CF_KEY,
            callback: function(token) {
                // console.log(`Challenge Success ${token}`);
                console.log('CF successfully loaded')
            },
        });
    };

    // window.cf && window.cf.recaptcha && window.cf.recaptcha('#captcha-container');
})

async function handleSubmit(e){
    e.preventDefault();
    errorList.value = []

    // const captchaCompleted = window.cf && window.cf.recaptcha && window.cf.recaptcha('getResponse');
    const captchaCompleted = turnstile.getResponse('#captcha-container') || false

    let name = e.target.name.value;
    let email = e.target.email.value;
    let subject = e.target.subject.value;
    let description = e.target.description.value;
    
    if (name.trim() === ''){
        errorList.value.push('⚠️ Name field is empty')
    }
    if (email.trim() === ''){
        errorList.value.push('⚠️ Email field is empty')
    }
    if (subject.trim() === ''){
        errorList.value.push('⚠️ Subject field is empty')
    }
    if (description.trim() === ''){
        errorList.value.push('⚠️ Description field is empty')
    }
    if (!captchaCompleted){
        errorList.value.push('⚠️ Captcha failed')
    }
    

    if (! (errorList.value.length > 0) ){

        try{
            const message = {
                name : name,
                email : email,
                subject : subject,
                description : description,
                date: Date(),
                read: false
            }
            await createMessage(message)

            console.table(message)
            modalMsg.value = {
                title : content.ui.modalMsgSuccess.title,
                description: content.ui.modalMsgSuccess.description,
                danger: false
            }
            showModal.value= true

            e.target.name.value = ''
            e.target.email.value = ''
            e.target.subject.value = ''
            e.target.description.value = ''
            turnstile.remove('#captcha-container')
            msgSent.value = true

        } catch (e) {
            console.error("Error el crear en Mensaje: ", e)
            modalMsg.value = {
                title : content.ui.modalMsgError.title,
                description: content.ui.modalMsgError.description,
                danger: true
            }
            showModal.value= true
        }
        
        
    }
}

function close(){
    showModal.value = false;
}

</script>
<template>
    <section class="contact lg:flex" id="contact">
        <transition>

            <Modal
                v-if="showModal" 
                @close-modal="close"
                :msg="modalMsg"/>

        </transition>
        <div class="flex flex-col items-center justify-center gap-3 
                    border border-orange-600 dark:border-emerald-500 
                    rounded-lg p-3 mb-4 lg:me-4 lg:mb-0 lg:w-1/2">
            <p class="text-xl font-medium">{{ contactContent.q1 }}</p>
            <p class="text-xl font-medium">{{ contactContent.q2 }}</p>
            <p class="text-xl font-medium">{{ contactContent.q3 }}</p>
            <p class="text-xl font-medium">{{ contactContent.q4 }}</p>
            <p class="text-2xl font-bold text-orange-500 dark:text-emerald-500 my-3">
                {{ contactContent.message }}
            </p>
        </div>
        <form @submit.prevent="handleSubmit" class="flex flex-col lg:w-1/2 mx-auto gap-3">
            <input class="rounded bg-white w-full dark:bg-[#3b3b3b] p-2" name="name" type="text" :placeholder="content.ui.name" required>
            <input class="rounded bg-white w-full dark:bg-[#3b3b3b] p-2" name="email" type="email" :placeholder="content.ui.email" required>
            <input class="rounded bg-white w-full dark:bg-[#3b3b3b] p-2" name="subject" type="text" :placeholder="content.ui.subject" required>
            <textarea class="rounded bg-white w-full dark:bg-[#3b3b3b] p-2 h-40 resize-none" name="description" :placeholder="content.ui.description" required></textarea>
            <div id="captcha-container"></div>
            <div v-if="errorList.length > 0" class="contact__error-container">
                <ul class="contact__error-list">
                    <li class="contact__error-item text-red-500 dark:text-orange-600 " v-for="error in errorList">
                        {{ error }}
                    </li>
                </ul>
            </div>
            <input 
                v-if="!msgSent"
                class="w-full bg-orange-500 dark:bg-emerald-500 rounded-lg py-2
                text-lg font-medium text-white hover:cursor-pointer 
                hover:bg-orange-400 dark:hover:bg-emerald-400" 
                type="submit" 
                :value="content.ui.send">
            <div 
                class="bg-green-500 dark:bg-green-600 text-white text-center rounded-lg 
                        font-bold py-3"
                v-else>
                <p>{{ contactContent.msgSent }}</p>
            </div>
        </form>
    </section>
</template>
<style scoped>

.v-enter-active, .v-leave-active{
    transition: opacity .5s ease;  
}
.v-leave-to, .v-enter-from{ 
    opacity: 0;
}

.contact__error-item::marker{
    content: '⮞';
}

</style>