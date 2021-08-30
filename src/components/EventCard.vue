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