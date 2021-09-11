
<template>
    <p>Register the event</p>
    <button @click="register">Register Me!</button>
</template>

<script>

export default {
    name: "EventRegister",
    props: ['event'],
    inject: ['GStore'], // <---- Inject the Global Store
    data() {
        return {
            
        }
    },
    methods: {
        register() {
            this.GStore.flashMessage =
                'You are successfully registered for ' + this.event.title;
            setTimeout(() => {  // After 3 seconds remove it
                this.GStore.flashMessage = ''
            }, 3000)
            this.$router.push({name: "EventDetails"})
        }
    }
}
</script>