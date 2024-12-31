<template>

<input type="text" v-model="page.title">
    Temps écoulé {{ time }}
    <button @click="reset">Reset</button><br></br>

</template>

<script setup>

import { ref, watch, watchEffect } from 'vue'

import { useTimer } from './composable/useTimer';


/*
const name= ref("")

watch(name, (newValue, oldValue) => {
    document.title = newValue
}, {immediate: true})

*/
const {time, reset} = useTimer()
const page= ref({
    title: ''
})

/*
watch(() => page.value.title, (newValue, oldValue) => {
    document.title = newValue;
}, {immediate: true})
*/

watchEffect(() => {
    document.title = page.value.title
})

</script>