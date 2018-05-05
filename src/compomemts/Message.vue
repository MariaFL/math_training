<template>
    <div class="alert" :class="'alert-' + type">
        <h3>{{ text }}</h3>
        <hr>
        <button class="btn btn-primary" @click="$emit('onNext')">Continue</button>
    </div>
</template>

<script>
    export default {
        props: ['type', 'text']
    }
</script>

<style>
    .alert {
        text-align: center;
    }
    h3, .btn {
        margin: 30px 0;
    }
</style>