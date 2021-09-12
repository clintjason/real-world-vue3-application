<template>
  <h1>Events For Good</h1>
  <div class="events">
    <Event v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link rel="prev" id="page-prev"
        :to="{name: 'EventCard', query: {page: page - 1}}"
        v-if="page != 1"
      >&#60; Previous</router-link>
      <router-link rel="next" id="page-next"
        :to="{name: 'EventCard', query: {page: page + 1}}"
        v-if="hasNextPage"
      >Next &#62;</router-link>
    </div>
  </div>
</template>

<script>
import Event from "@/components/Event";
import EventService from "@/services/EventService.js";
//import NProgress from 'nprogress' // <---

//import {watchEffect} from "vue"; // listens to component update
export default {
  name: 'EventCard',
  props: ['page'],
  components: {
    Event
  },
  data() {
    return {
      events: null,
      totalEvents:0
     }
   },
   /* created() {
     watchEffect(()=> {
       //this.events = null;
       EventService.getEvents(2,this.page)
       .then(response => {
         console.log(response);
         this.events = response.data;
         this.totalEvents = response.headers['x-total-count']
        })
        .catch(error=>{ 
          console.error(error);
          this.$router.push({name: 'NetworkError'})
          })
     })
   }, */
   beforeRouteEnter(routeTo, routeFrom, next) {
    //NProgress.start()
    EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then(response => {
        // next here tells the router to wait until the api call returns
        // before moving to the route and parsing the data
        next(comp => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' }) 
      })
      /* .finally(() => {
        NProgress.done()
      }) */
  },
  beforeRouteUpdate(routeTo) {
    //NProgress.start()
    // the return here serves as next above. It tells the router to wait
    // the API call is finished
    return EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then(response => {
        this.events = response.data // <-----
        this.totalEvents = response.headers['x-total-count'] // <-----
        //next() // <----- return to the next route by default
      })
      .catch(() => {
        return { name: 'NetworkError' } // go to the network error
      })
      /* .finally(() => {
        NProgress.done();
      }) */
  },
   computed: {
     hasNextPage() {
       let totalPages = Math.ceil(this.totalEvents / 2);
       console.log(totalPages);
       return this.page < totalPages;
     }
   }

}
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pagination {
  display: flex;
  width: 290px;
  }
  .pagination a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
  }
  #page-prev {
    text-align: left;
  }
  #page-next {
    text-align: right;
  }
</style>