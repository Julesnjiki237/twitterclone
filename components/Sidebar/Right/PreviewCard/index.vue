<template>
    <div class="m-2 border bg-gray-50">
        <h1>
            {{props.title}}
        </h1>
    </div>
</template>

<script setup>


const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>