<template>
  <h1>Events For Good</h1>
  <div class="events">
    <Event v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import Event from "@/components/Event";
import EventService from "@/services/EventService.js";

export default {
  name: 'EventCard',
  components: {
    Event
  },
  data() {
    return {
      events: null
     }
   },
   created() {
     EventService.getEvents()
     .then(response => {
       console.log(response);
       this.events = response.data;
      })
      .catch(error=>{ console.error(error);})
   }

}
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>