
<template>
    <p>Edit the event</p>
</template>

<script>

export default {
    name: "EventEdit",
    props: ['event'],
  data() {
    return {
      unsavedChanges: true  // <-- Flag gets set to true if anything 
                             //          is changed on the form
    }
  },
  beforeRouteLeave(routeTo, routeFrom, next) {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (answer) {
        next() // <-- Confirms the navigation
      } else {
        next(false) // <-- Cancels the navigation
      }
    } else {
      next() // <-- Confirms the navigation
    }
    //alternative with vue router 4
    /* if (this.unsavedChanges) {
      const answer = window.confirm(
        'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false // <-- Cancels the navigation
      }
    } */
  }
}
</script>