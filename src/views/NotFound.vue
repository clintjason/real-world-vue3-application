<template>
    <h1>Oops!</h1>
    <h3>The {{resource}} you are looking for is not here.</h3>
    <router-link :to="{name: 'EventCard'}">Back to home page</router-link>
</template>

<script>

export default {
   props: {
       resource: {
           type: String,
           required: true,
           default: 'Page'
       }
   }
}
</script>


