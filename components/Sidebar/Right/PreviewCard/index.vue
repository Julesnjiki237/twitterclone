<template>
    <div class="overflow-hidden m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700" :class="twitterBorderColor">
        <h1 class="p-3 text-xl font-extrabold text-gray-800 border-b
        dark:text-white" :class="twitterBorderColor">
            {{props.title}}
        </h1>
        <slot>

        </slot>
        <div class="p-3 text-sm text-blue-400 cursor-pointer
         hover:bg-gray-100
         dark:hover:bg-dim-300" :class="defaultTransition">
            Show More
        </div>
    </div>
</template>

<script setup>

const {twitterBorderColor, defaultTransition} = useTailwindConfig() 
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>