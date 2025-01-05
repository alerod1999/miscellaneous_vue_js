<template>
    <Transition name="fadeSlide" mode="out-in">
        <slot></slot>
    </Transition>
</template>

<style>
.fadeSlide-enter-active,
.fadeSlide-leave-active {
    transition : .5;
}
.fadeSlide-enter-from,
.fadeSlide-leave-to {
    opacity: 0;
}

</style>