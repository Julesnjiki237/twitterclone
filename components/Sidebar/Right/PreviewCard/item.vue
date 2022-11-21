<template>
    <div class="p-3 border-b hover:bg-gray-100 cursor-pointer
    dark:hover:bg-gray-300" :class="wrapperClasses">
        <slot>
            
        </slot>
    </div>
</template>

<script setup>

const wrapperClasses = computed(() =>
`${defaultTransition} ${twitterBorderColor}`)

const {defaultTransition, twitterBorderColor} = useTailwindConfig();
</script>