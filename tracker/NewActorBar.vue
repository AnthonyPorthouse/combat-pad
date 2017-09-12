<template>
    <div class="NewActorBar">
        <input type="text" v-model="name">
        <input type="text" v-model="initiative">

        <select v-model="selectedType">
            <option v-for="(type, key) in types" :key="key" :value="key" :selected="selectedType === type ? 'selected' : ''" >{{ type }}</option>
        </select>

        <button @click.prevent="addActor">Add Actor</button>
    </div>
</template>

<script>
    import Actor from './Actor';

    import {TYPE_PC, TYPE_NPC, TYPE_ENEMY} from './Actor';

    export default {
        data() {
            return {
                name: undefined,
                initiative: 0,
                selectedType: TYPE_PC,
                types: {
                    [TYPE_PC]: 'PC',
                    [TYPE_NPC]: 'NPC',
                    [TYPE_ENEMY]: 'Enemy',
                }
            }
        },

        methods: {
            addActor() {
                this.$emit('addActor', new Actor(this.name, this.initiative, this.selectedType));
            }
        }
    }
</script>
