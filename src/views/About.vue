<template>
  <div class="about">
    <h1>A site for events to better the world.</h1>
    <div v-show="showExtra">Extra stuff</div>
  </div>
</template>

<script>
export default {
  props: ['showExtra'],
}
</script>
