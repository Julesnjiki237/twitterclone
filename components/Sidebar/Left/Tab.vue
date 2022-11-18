<template>
    <Nuxt-link to="#" class=" flex items-center p-3 w-min hover:bg-gray-200 rounded-full"
    :class="defaultTransition">
        <div class=" h-6 w-8 text-dark"  >
            <slot name="icon"></slot>
        </div>
        <div class="ml-3 mt-4 text-xl" :class="textClasses">
            <slot name="name"></slot>

        </div>
    </Nuxt-link>  
</template>

<script setup>

const {defaultTransition} = useTailwindConfig()

const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    }
})

const textClasses = computed(()=> props.active ? 'font-semibold' : 'font-normal')
</script>