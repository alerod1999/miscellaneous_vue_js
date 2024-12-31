<template>

<button @click="toggleSpoiler">Display / Hide spoiler </button>
<Transition>
    <div v-if="showSpoiler" class="spoiler">
At the end of the episode, the main character dies !

</div>
</Transition>


</template>
<script setup>
import { ref } from 'vue';

const showSpoiler = ref(false)
const toggleSpoiler = () => showSpoiler.value = !showSpoiler.value
</script>
<style>
.spoiler {
    padding: 5rem;
    border: 1px solid white;
    transition: .5s;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

</style>