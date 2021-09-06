<template>
    <h1>Data with page number: {{page}} </h1>
    <p>{{showExtra}}</p>
</template>

<script>
    export default {
        props: ['page','showExtra'],
    }
</script>