<script setup lang="ts">
import type { Event } from '@/types'
const props = defineProps<{
  event: Event
}>()
// const event = ref ({
//     id: 5928101,
//     category: 'animal welfare',
//     title: 'Cat Adoption Day',
//     description: 'Find your new feline friend at this event.',
//     location: 'Meow Town',
//     date: 'January 28, 2022',
//     time: '12:00',
//     petsAllowed: true,
//     organizer: 'Kat Laydee'
// })
</script>

<template>
  <RouterLink class="text-slate-950 no-underline" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px]
    mb-[18px] hover:scale-101 hover:shadow-sp">
      <h2>{{ props.event.title }}</h2>
      <span>@{{ props.event.time }} on {{ props.event.date }}</span>
    </div>

</RouterLink>
</template>
