<template>
    <div class="NewActorBar">
        <input type="text" v-model="name">
        <input type="text" v-model="initiative">

        <button @click.prevent="addActor">Add Actor</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                initiative: 0,
            }
        },

        computed: {
            actor() {
                return {
                    name: this.name,
                    initiative: Number(this.initiative)
                }
            }
        },

        methods: {
            addActor() {
                this.$emit('addActor', this.actor);
            }
        }
    }
</script>
