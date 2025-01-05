<template>
    <div class="relative">
        <!--<Transition name="fadeSlide" mode="out-in">-->
        <Transition name="fadeSlide">
        <slot></slot>
    </Transition>
    </div>
    
</template>

<style>
.relative {
    position: relative;
}
.fadeSlide-enter-active,
.fadeSlide-leave-active {
    transition : .5;
}
.fadeSlide-leave-active {
    position: absolute;
    width:100%;
}
.fadeSlide-enter-from,
.fadeSlide-leave-to {
    opacity: 0;
}

</style>