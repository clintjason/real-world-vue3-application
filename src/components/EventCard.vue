<template>
    <h1>Events For Good</h1>
    <div class="events">
        <Event v-for="event in events" :key="event.id" :event="event" />
    </div>
</template>

<script>
import Event from "@/components/Event";
export default {
  name: 'EventCard',
  components: {
    Event
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee'
        },
        {
          id: 4582797,
          category: 'food',
          title: 'Community Gardening',
          description: 'Join us as we tend to the community edible plants.',
          location: 'Flora City',
          date: 'March 14, 2022',
          time: '10:00',
          petsAllowed: true,
          organizer: 'Fern Pollin'
        },
        {
          id: 8419988,
          category: 'sustainability',
          title: 'Beach Cleanup',
          description: 'Help pick up trash along the shore.',
          location: 'Playa Del Carmen',
          date: 'July 22, 2022',
          time: '11:00',
          petsAllowed: false,
          organizer: 'Carey Wales'
        }
      ]
     }
   },
}
</script>

<style scoped>
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }

  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>