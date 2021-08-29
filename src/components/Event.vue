<template>
    <div class="event-card">
        <span>@{{ event.time }} on {{ event.date }}</span>
        <h4>{{ event.title }}</h4>
    </div>
</template>


<script>
export default {
    name:'Event',
    props: {
        event: {
            type: Object,
            required: true,
        }
    },
    data: function() {
        return {}
    }
}

</script>