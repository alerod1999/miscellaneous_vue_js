<template>

<button @click="toggleSpoiler">Display / Hide spoiler </button>
<FadeTransition>
    <div v-if="showSpoiler" class="spoiler">
At the end of the episode, the main character dies !

</div>

<div v-else class="spoiler">
This button displays spoiler.

</div>
</FadeTransition>


</template>
<script setup>
import { ref } from 'vue';
import FadeTransition from './FadeTransition.vue';

const showSpoiler = ref(false)
const toggleSpoiler = () => showSpoiler.value = !showSpoiler.value
</script>
<style>
.spoiler {
    padding: 5rem;
    border: 1px solid white;
    transition: .5s;
}


</style>