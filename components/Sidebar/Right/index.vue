<template>
    <div class="flex flex-col">
        <!-- preview card: what's happening -->
        <SidebarRightPreviewCard title="what's happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatHappeningItems" :key="whatsHappening">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                    <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
                </div>
                    
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
        <!-- preview card: Who to follow -->
        <SidebarRightPreviewCard title="Who to follow"
        >
            <SidebarRightPreviewCardItem 
            v-for="WhoToFollow in whoToFollowItems" :key="WhoToFollow">

            <div class=" flex flex-row justify-between p-2">
                <div class="flex flex-row ">
                    <img class="w-10 h-10 rounded-full" :src="WhoToFollow.image" :alt="WhoToFollow.name">
                    <div class="flex flex-col">

                    </div>
                </div>
            </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
        
    </div>
</template>
<script setup>

const whatHappeningItems = ref([
    {
    title: 'SpaceX',
    count: '19.87k Tweets'
},
    {
    title: 'CodingIsFun',
    count: '9.87k Tweets'
},
    {
    title: 'TimerDigitech',
    count: '11.87k Tweets'
},


])

const  whoToFollowItems = ref([
    {
        name: 'Jules Kevin',
        handle: '@donJules',
        image: 'https://picsum.photos/200/200'
    },
    {

    },
    {

    }
])
</script>