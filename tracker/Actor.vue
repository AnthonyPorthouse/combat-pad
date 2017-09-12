<template>
    <div class="actor">
        <h1>{{ name }}</h1>
        <h2>{{ initiative }}</h2>
    </div>
</template>

<script>
    export default {
        props: {
            actor: {
                type: Object,
                required: true,
            },
        },

        computed: {
            id() {
                return this.actor.name;
            },

            name() {
                return this.actor.name;
            },

            initiative() {
                return this.actor.initiative;
            }
        },
    }
</script>
