
<template>
    <p>Register the event</p>
    <button @click="register">Register Me!</button>
</template>

<script>

export default {
    name: "EventRegister",
    props: ['event'],
    data() {
        return {
            
        }
    },
    methods: {
        register() {
            this.$router.push({name: "EventDetails"})
        }
    }
}
</script>