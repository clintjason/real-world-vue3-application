<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails'}"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'EventRegister'}"
        >Register</router-link
      >
      |
      <router-link :to="{ name: 'EventEdit'}"
        >Edit</router-link
      >
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>

<script>
//import EventService from "@/services/EventService";

export default {
    name: "EventLayout",
    inject: ['GStore'],
  /* created() {
    // fetch event (by id) and set local event data
    EventService.getEvent(this.id)
     .then(response => {
       this.event = response.data;
      })
      .catch(error=>{ 
        console.error(error);
        if(error.response && error.response.Status == 404) {
            this.$router.push({
                name: '404Resource',
                params: {resource: 'event'}
            })
        }
        this.$router.push({name: 'NetworkError'})
    })
  } */
}
</script>