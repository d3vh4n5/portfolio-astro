<script setup>
import { defineProps, defineEmits} from 'vue';

const { msg } = defineProps({
  msg: Object,
});


defineEmits(['closeModal']);

</script>
<template>
    <div class="fixed top-0 left-0 backdrop-blur w-full h-full flex items-center justify-center ">
        <div class="flex flex-col rounded-md max-w-80 bg-white dark:bg-[#101218] shadow-lg overflow-hidden">
            <div class="bg-emerald-600 py-3 text-white" :class="{danger: msg.danger}">

                <h2 class="text-2xl font-medium flex gap-6 items-center px-3">
                    <span class="font-bold text-4xl" v-if="msg.danger"> ⚠️ </span>
                    <span class="font-bold text-4xl" v-else> ✅ </span>
                    {{ msg.title }}
                </h2>
            </div>
            <div class="p-4 ">
                <p>
                    {{ msg.description }}
                </p>
            </div>
            <button 
                @click="$emit('closeModal', {id: 33})" 
                class="bg-emerald-600 hover:bg-emerald-500 py-1 
                px-6 rounded my-3 mx-auto text-white" :class="{danger: msg.danger}"
            >OK</button>
        </div>
    </div>
</template>
<style>

.danger{
    background-color: rgb(247, 91, 64) !important;

    &:hover{
        background-color: rgb(250, 110, 85) !important;
    }
}

</style>