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

        data: () => {
            return {
                name: '',
                initiative: 0,
            }
        },

        beforeMount() {
            this.name = this.actor.name || '';
            this.initiative = this.actor.initiative || 0;
        }
    }
</script>
