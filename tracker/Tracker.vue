<template>
    <div>
        <h1>Tracker</h1>

        <new-actor-bar @addActor="addActor"></new-actor-bar>

        <div class="actors">
            <actor v-for="actor in actors" :key="actor.id" :actor="actor"></actor>
        </div>

    </div>
</template>

<script>
    import Actor from './Actor.vue';
    import NewActorBar from './NewActorBar.vue';

    export default {
        components: {
            'actor': Actor,
            'new-actor-bar': NewActorBar,
        },

        props: {},

        data() {
            return {
                newName: '',
                newInitiative: 0,

                actors: [],
            };
        },

        methods: {
            addActor(actor) {
                this.actors.push(actor);
            },
        },
    }
</script>
