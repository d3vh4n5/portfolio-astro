<script setup>
import {ref, computed} from 'vue'
import { geti18n } from '../../../i18n/index';
import { createMessage } from '../../../models/Message';
import Modal from './Modal.vue';

const currentHref= window.location.pathname
const currentLocale = currentHref.split('/')[1]

const content = geti18n(currentLocale)
const errorList = ref([])
const showModal = ref(false)
const modalMsg = ref({
    title : 'Test',
    description: 'Test message Test message Test message Test message',
    danger: false
})


async function handleSubmit(e){
    e.preventDefault();
    errorList.value = []

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
    <section class="contact" id="contact">
        <transition>

            <Modal
                v-if="showModal" 
                @close-modal="close"
                :msg="modalMsg"/>

        </transition>
        <form @submit.prevent="handleSubmit" class="flex flex-col lg:w-1/2 mx-auto gap-3">
            <input class="rounded bg-white w-full dark:bg-[#3b3b3b] p-2" name="name" type="text" :placeholder="content.ui.name" required>
            <input class="rounded bg-white w-full dark:bg-[#3b3b3b] p-2" name="email" type="email" :placeholder="content.ui.email" required>
            <input class="rounded bg-white w-full dark:bg-[#3b3b3b] p-2" name="subject" type="text" :placeholder="content.ui.subject" required>
            <textarea class="rounded bg-white w-full dark:bg-[#3b3b3b] p-2 h-40 resize-none" name="description" :placeholder="content.ui.description" required></textarea>
            <div v-if="errorList.length > 0" class="contact__error-container">
                <ul class="contact__error-list">
                    <li class="contact__error-item text-red-500 dark:text-orange-600 " v-for="error in errorList">
                        {{ error }}
                    </li>
                </ul>
            </div>
            <input 
                class="w-full bg-orange-500 dark:bg-emerald-500 rounded-lg py-2
                text-lg font-medium text-white hover:cursor-pointer 
                hover:bg-orange-400 dark:hover:bg-emerald-400" 
                type="submit" 
                :value="content.ui.send">
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